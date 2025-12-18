export async function load({ params })
{
  let data = await import(`../${params.page}/~content.svx`);
  
  return {
    content: data.default,
    metadata: data.metadata,
  };
}
