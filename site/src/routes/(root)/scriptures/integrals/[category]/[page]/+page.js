import { error } from "@sveltejs/kit";


export async function load({ params })
{
  let data;
  
  try {
    data = await import(`../../${params.category}/${params.page}/~content.svx`);
  } catch {
    error(404);
  }
  
  return {
    content: data.default,
    metadata: data.metadata,
  };
}
