import { error } from "@sveltejs/kit";


export async function load({ params })
{
  let data;
  
  try {
    data = await import(`../${params.category}/~content.svx`);
  } catch {
    error(404, { message: "Couldn’t find the index page for that category!"});
  }
  
  return {
    content: data.default,
    metadata: { ...data.metadata, category: params.category },
  };
}
