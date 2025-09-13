import { error } from '@sveltejs/kit';


export async function load({ params })
{
  if (params.page === undefined) {
    error(404);
  }

  let data = await import(`../${params.page}/~content.svx`);
  
  return {
    content: data.default,
    metadata: data.metadata,
  };
}
