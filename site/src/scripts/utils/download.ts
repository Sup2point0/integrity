export function download_json_file(data: object, filename: string)
{
  let text = JSON.stringify(data, null, 2);
  let blob = new Blob([text], { type: "application/json" });
  let url = URL.createObjectURL(blob);

  let a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
}
