import { test, chromium } from "@playwright/test";

import type { url } from "#scripts/types";


let browser = await chromium.launch();

test("crawl-routes", async () =>
{
  let visited = new Set<url>();
  let question_pages_visited = 0;
  let failed_routes: url[] = [];

  let to_visit: {
    url: url,
    source: url,
  }[] = [
    { url: "/",        source: "." },
    { url: "/explore", source: "." },
  ];

  let active_workers = 0;

  await Promise.all(Array.from({ length: 4 }, (_, i) =>
    (async () => {
      await new Promise(r => setTimeout(r, i * 500));
      active_workers++;

      const WORKER = `[worker #${i+1}]`;
      console.info(`>> ${WORKER} Scanning for links...`);

      let ctx = await browser.newContext();
      let page = await ctx.newPage();

      while (true) {
        let next = to_visit.shift();
        if (!next) {
          if (active_workers == 1) break;
          
          /* Other workers might push more targets to the queue, so we'll wait a hot sec before deciding to finish */
          await new Promise(r => setTimeout(r, 500));
          next = to_visit.shift();
          if (!next) break;
        }

        let { url: target, source } = next;

        if (visited.has(target)) continue;
        visited.add(target);

        if (question_pages_visited > 69 && target.includes("?shard=")) continue;
        if (target.includes("?shard=")) question_pages_visited++;

        try {
          console.info(`-- ${WORKER} Visiting page: ${target}`);
          let status = await page.goto(target);

          if (!status?.ok()) throw Error();

          let links = await page.locator("a").evaluateAll(
            anchors => anchors
              .map(a => !a.disabled && a.href)
              .filter(url => url && url.includes("://localhost:") && !url.includes("#"))
          );
          to_visit.push(...links.map(url => ({ url, source: target })));
        }
        catch (e) {
          console.error(`!! ${WORKER} Failed to access route: ${target}; linked from: ${source}`);
          failed_routes.push(target);
        }
      }

      await ctx.close();
      active_workers--;
      console.info(`>> ${WORKER} Finished scanning.`);
    })()
  ));

  if (failed_routes.length > 0) {
    console.error(
      `\n---------------------------------------------------------------------`,
      `\n!! Failed to access routes:`,
      `\n\n   `,
      failed_routes.join("\n    ")
    );
  }
});
