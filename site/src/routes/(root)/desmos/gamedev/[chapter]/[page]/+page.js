import { dyna_scriptures } from "#scripts/site";

import { error } from "@sveltejs/kit";


export function load({ params })
{
  let chapter = dyna_scriptures["desmos-gamedev"][params.chapter];
  if (chapter === undefined) {
    error(404);
  }
  
  let page = chapter[params.page];
  if (page === undefined) {
    error(404);
  }

  // @ts-ignore
  page.wide = true;

  return {...page};
}
