import Site from "#scripts/site";

import { error } from "@sveltejs/kit";


export async function load({ url, params })
{
  let dest = url.pathname.slice(1);
  let path = Object.entries(Site.pages).find(
    ([_, data]) => data.dest === dest
  )?.at(0);  
  if (path === undefined) {
    error(404);
  }

  let page = Site.pages[path as string];
  if (page === undefined) {
    error(404);
  }
  
  // @ts-ignore
  page.category = params.category[0].toUpperCase() + params.category.slice(1);
  // @ts-ignore
  page.wide = true;

  let svx = await import(`../../${params.category}/${params.page}/~content.svx`);
  let content = svx.default;

  return { content, ...page };
}
