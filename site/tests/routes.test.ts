import { test, expect } from "@playwright/test";


test.beforeEach(async ({ page }) => {
  page.on("pageerror", err => { throw err; });
});

for (let route of tested_routes()) {
  test(route, async ({ page }) => {
  // for (let route of routes) {
    let status = await page.goto(route);
    expect(status?.ok(), `Failed to access \`${route}\``).toBe(true);
  // }
  });
}


// const routes = [
function tested_routes() {
  return [
  "/",
  "/data",
  "/workspace",
  "/questions",
  "/questions/graph-drawing",
  "/questions/integrals",
  "/questions/addvent",
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
  "/info/",
  "/info/roadmap.html",
  "/info/licence.html",
  "/info/faq.html",
  "/info/synopsis.html",
  "/info/privacy.html",
  "/info/changelog.html",
  "/info/decoded.html",
  "/scriptures.html",
  "/questions.html",
  "/info.html",
  "/integrity/integrity.html",
  "/fun.html",
  "/docs/",
  "/docs/integrals.html",
  "/docs/difficulties.html",
  "/docs/speedrun.html",
  "/docs/fun-facts.html",
  "/docs/tags.html",
  "/docs/questions.html",
  "/docs/shards.html",
  "/docs/fun-facts/",
  "/docs/fun-facts/alt.html",
  "/question/addvent.html",
  "/question/special.html",
  "/question/cool-graphs.html",
  "/question/complete-square.html",
  "/question/guess-graph.html",
  "/speedrun/",
  "/speedrun/init.html",
  "/speedrun/run.html",
  "/speedrun/finish.html",
  "/docs.html",
  "/fun/",
  "/fun/mit-ib.html",
  "/fun/year.html",
  "/fun/unsw-ib/",
  "/fun/unsw-ib/2022.html",
  "/fun/year/",
  "/fun/year/2024.html",
  "/fun/year/2025.html",
  "/fun/unsw-ib.html",
  "/fun/mit-ib/",
  "/fun/mit-ib/2023.html",
  "/scriptures/",
  "/trails.html",
  "/404.html",
  "/explore.html",
];
}
