import { DynamicScripture } from "#scripts/types";


import dyna_scriptures_data from "#src/data/dyna-scriptures.json" with { type: "json" };
export const dyna_scriptures = process_dyna_scriptures(dyna_scriptures_data);


interface DynamicScripturesData {
  [domain: string]: {
    [chapter: string]: Record<string, DynamicScripture>
  }
}


function process_dyna_scriptures(raw: object): DynamicScripturesData
{
  let out: DynamicScripturesData = {};

  for (let [domain, chapters] of Object.entries(raw)) {
    out[domain] = {};

    for (let [chapter, pages] of Object.entries(chapters)) {
      chapter = chapter.toLowerCase();

      out[domain][chapter] = {};

      for (let [page, data] of Object.entries(pages as Record<string, DynamicScripture>)) {
        out[domain][chapter][page] = new DynamicScripture(data);
      }
    }
  }

  return out;
}
