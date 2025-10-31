export async function load()
{
  let data = await import("./~content.svx");
  
  return {
    content: data.default,
    metadata: data.metadata,
  };
}
