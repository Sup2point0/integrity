import Site from "#scripts/site";
import { capitalise } from "#scripts/utils";

import { error } from "@sveltejs/kit";


export async function load({ url, params })
{
  let dest = url.pathname.slice(1);
  
  let path = Object.entries(Site.pages).find(
    ([_, data]) => data.dest === dest || `integrity/${data.dest}` === dest
  )?.at(0);

  if (path === undefined) {
    console.error(`!! CRITICAL: No path found for ${dest}`);
    error(404, { message: `No path found for ${dest}` });
  }

  let page = Site.pages[path as string];
  if (page === undefined) {
    console.log(`!! CRITICAL: No page found for ${path}`);
    error(404, { message: `No page found for ${path}!` });
  }
  
  // @ts-ignore
  page.category = capitalise(params.category);
  // @ts-ignore
  page.wide = true;

  let svx = await import(`../../${params.category}/${params.page}/~content.svx`);
  let content = svx.default;

  return { content, ...page };
}
