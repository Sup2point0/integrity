import desmos_gamedev_scriptures from "#src/data/scriptures.json";

import { error } from "@sveltejs/kit";


export function load({ params })
{
  let chapter = desmos_gamedev_scriptures[params.chapter];
  if (chapter === undefined) {
    error(404);
  }
  
  let page = chapter[params.page];
  if (page === undefined) {
    error(404);
  }

  page.wide = true;

  return page;
}
