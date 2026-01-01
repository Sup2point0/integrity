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
  "/desmos/docs",
  "/desmos/docs/identifiers",
  "/desmos/gamedev",
];
