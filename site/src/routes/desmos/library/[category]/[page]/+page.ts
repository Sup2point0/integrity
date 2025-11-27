import Site from "#scripts/site";
import { capitalise } from "#scripts/utils";

import { error } from "@sveltejs/kit";


export async function load({ url, params })
{
  let dest = url.pathname.slice(1);
  console.log("dest =", dest);
  
  let path = (
    Object.entries(Site.pages)
    .find(([_, data]) => data.dest === dest)
    ?.at(0)
  );

  if (path === undefined) {
    console.log("NO PATH FOUND");
    error(404, { message: `No path found!` });
  }

  let page = Site.pages[path as string];
  if (page === undefined) {
    console.log(`NO ROUTE FOUND FOR ${path}`);
    error(404, { message: `Failed to find route ${path}!` });
  }
  
  // @ts-ignore
  page.category = capitalise(params.category);
  // @ts-ignore
  page.wide = true;

  let svx = await import(`../../${params.category}/${params.page}/~content.svx`);
  let content = svx.default;

  return { content, ...page };
}
