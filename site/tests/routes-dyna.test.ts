import { test, expect } from "@playwright/test";


test.beforeEach(async ({ page }) => {
  page.on("pageerror", err => { throw err; });
});

test("routes", async ({ page }) => {
  for (let route of routes) {
    let status = await page.goto(route);
    expect(status?.ok(), `Failed to access \`${route}\``).toBe(true);
  }
});


// TODO dynamically fetch these?
const routes = [
  "/scriptures/graph-drawing.html",
  "/scriptures/integrals.html",
  "/scriptures/special/haskell-conjecture.html",
  "/scriptures/general.html",
  // "/scriptures/complete-square/",  // FIXME!
  "/scriptures/complete-square/why.html",
  "/scriptures/graph-drawing/",
  "/scriptures/graph-drawing/why.html",
  "/scriptures/graph-drawing/dyna/multiplication.html",
  "/scriptures/integrals/",
  "/scriptures/integrals/antiderivatives/",
  "/scriptures/integrals/antiderivatives/sec-3.html",
  "/scriptures/integrals/antiderivatives/123-horror.html",
  "/scriptures/integrals/antiderivatives/ln.html",
  "/scriptures/integrals/antiderivatives/power-rule.html",
  "/scriptures/integrals/why.html",
  "/scriptures/integrals/adventures.html",
  "/scriptures/integrals/why-hard.html",
  "/scriptures/integrals/general.html",
  "/scriptures/integrals/adventures/",
  "/scriptures/integrals/adventures/what-good.html",
  "/scriptures/integrals/adventures/-c.html",
  "/scriptures/integrals/adventures/artanh.html",
  "/scriptures/integrals/adventures/write.html",
  "/scriptures/integrals/adventures/neat-trick.html",
  "/scriptures/integrals/methods/",
  "/scriptures/integrals/methods/partials.html",
  "/scriptures/integrals/methods/power-partials.html",
  "/scriptures/integrals/methods/sub.html",
  "/scriptures/integrals/collections/",
  "/scriptures/integrals/collections/once.html",
  "/scriptures/integrals/collections/int-int.html",
  "/scriptures/integrals/collections/standard-integrals.html",
  "/scriptures/integrals/collections/epic-errors.html",
  "/scriptures/integrals/collections/everything-anything.html",
  "/scriptures/integrals/collections/int-int/",
  "/scriptures/integrals/collections/int-int/int-int.html",
  "/scriptures/integrals/antiderivatives.html",
  "/scriptures/integrals/how.html",
  "/scriptures/integrals/collections.html",
  "/scriptures/integrals/methods.html",
  "/scriptures/general/",
  "/scriptures/general/signs.html",
  "/scriptures/general/inequalities.html",
  "/scriptures/general/sign.html",
  "/desmos/library/rendering",
  "/desmos/library/rendering/polygons",
  "/desmos/library/rendering/curves",
  "/desmos/library/rendering/lines",
  "/desmos/library/functions",
  "/desmos/library/functions/numerical",
  "/desmos/library/functions/sequences",
  "/desmos/library/functions/ranges",
  "/desmos/library/functions/trig",
  "/desmos/library/functions/interpolation",
  "/desmos/library/functions/lists",
  "/desmos/library/functions/random",
  "/desmos/gamedev/polymap",
  "/desmos/gamedev/core/actions",
  "/desmos/gamedev/core/identifiers",
  "/desmos/gamedev/core/ranges",
  "/desmos/gamedev/rendering",
  "/desmos/gamedev/essentials/variables",
  "/desmos/gamedev/essentials/graphs",
  "/desmos/gamedev/essentials/lists",
];
