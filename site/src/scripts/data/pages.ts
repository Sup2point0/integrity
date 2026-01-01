import type { Page } from "#scripts/types";


import pages_data from "#src/data/site.json" with { type: "json" };
export const pages = pages_data.pages;
export const index = pages_data.index;
export const scriptures = find_scriptures(pages);


interface SiteScriptures {
  [topic: string]: Page[]
}


function find_scriptures(raw: object): SiteScriptures
{
  // MIGRATE: Maybe increase nesting?
  let out: SiteScriptures = {};

  for (let p of Object.values(raw)) {
    let page = p as Page;

    if (page.index?.includes("scriptures")) {
      let topic = page.index[1];

      if (out[topic] == null) {
        out[topic] = [];
      }
      out[topic].push(page);
    }
  }
  
  return out;
}

