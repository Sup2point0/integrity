export async function load({ params })
{
  let data = await import("./~content.svx");
  
  return {
    content: data.default,
    metadata: data.metadata,
  };
}
