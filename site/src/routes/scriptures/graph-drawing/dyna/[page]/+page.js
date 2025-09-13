import { dyna_scriptures } from "#scripts/data";

import { error } from "@sveltejs/kit";


export function load({ params })
{
  let page = dyna_scriptures["graph-drawing"][params.page];
  if (page === undefined) {
    error(404);
  }

  // @ts-ignore
  page.wide = true;

  return { ...page };
}
