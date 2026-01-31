import { error } from "@sveltejs/kit";


export async function load({ params })
{
  let data;
  
  try {
    data = await import(`../${params.page}/~content.svx`);
  } catch {
    error(404, { message: `Couldn’t find the page you’re looking for =(` });
  }
  
  return {
    content: data.default,
    metadata: data.metadata,
  };
}
