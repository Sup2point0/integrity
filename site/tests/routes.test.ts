import { test, expect } from "@playwright/test";

import type { url } from "#scripts/types";


// test.beforeEach(async ({ page }) => {
//   page.on("pageerror", err => { throw err; });
// });

test("crawl-routes", async ({ page }) =>
{
  let visited = new Set<url>();
  let failed_routes = [];

  let to_visit: {
    url: url,
    source: url,
  }[] = [
    { url: "/",        source: "." },
    { url: "/explore", source: "." },
  ];

  while (true) {
    let next = to_visit.shift();
    if (!next) break;

    let { url: target, source } = next;
    if (visited.has(target)) continue;

    try {
      console.info(`-- Visiting page: ${target}`);
      let status = await page.goto(target);

      if (!status?.ok()) throw Error();

      visited.add(target);

      let links = await page.locator("a").evaluateAll(
        anchors => anchors
          .map(a => !a.disabled && a.href)
          .filter(url => url && (
            url.includes("://localhost:")
            || url.includes("https://sup2point0.github.io/integrity")
          ))
      );
      // console.log("links =", links);
      to_visit.push(...links.map(url => ({ url, source: target })));
    }
    catch (e) {
      console.error(`!! Failed to access route: ${target}; linked from: ${source}`);
      failed_routes.push(target);
    }
  }

  expect(failed_routes.length).toBe(0);
});
