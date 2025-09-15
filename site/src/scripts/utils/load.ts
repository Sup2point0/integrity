import Site from "#scripts/site.js";
import type { Page } from "#scripts/types";

import { error } from "@sveltejs/kit";


export function load_page(route: string, index?: string)
{
  let page: Page | undefined;

  page = Site.pages[route];

  if (page === undefined) {
    if (index) {
      let paths = Site.index[index].pages;

      for (let path of paths) {
        console.log("path =", path);
        let candidate = Site.pages[path];

        if (candidate.dest === route) {
          page = candidate;
          break;
        }
      }
    }
    else {
      page = Object.values(Site.pages).find(page => page.dest === route);
    }
  }

  if (page === undefined) {
    error(404, { message: "No page with that route found!" });
  }

  return page;
}
