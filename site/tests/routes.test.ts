import { test, expect } from "@playwright/test";


test.beforeEach(async ({ page }) => {
  page.on("pageerror", err => { throw err; });
});

test("routes", async ({ page }) => {
  for (let route of routes) {
    let status = await page.goto(route);
    await page.waitForTimeout(200);
    expect(status?.ok(), `Failed to access \`${route}\``).toBe(true);
  }
});


const routes = [
  "/",
  "/data",
  "/workspace",
  "/questions",
  "/questions/graph-drawing",
  "/questions/integrals",
  "/questions/addvent",
  "/questions/special",
  "/questions/special",
  "/questions/special/interview",
  "/questions/all",
  "/questions/cool-graphs",
  "/questions/complete-square",
  "/questions/guess-graph",
  "/trails",
  "/trails/integrals",
  "/trails/integrity",
  "/speedrun",
  "/desmos",
  "/desmos/library",
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
  "/desmos/docs",
  "/desmos/docs/identifiers",
  "/desmos/gamedev",
  "/desmos/gamedev/polymap",
  "/desmos/gamedev/core/actions",
  "/desmos/gamedev/core/identifiers",
  "/desmos/gamedev/core/ranges",
  "/desmos/gamedev/rendering",
  "/desmos/gamedev/essentials/variables",
  "/desmos/gamedev/essentials/graphs",
  "/desmos/gamedev/essentials/lists",
];
