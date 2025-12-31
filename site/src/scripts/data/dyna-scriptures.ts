import { DynamicScripture } from "#scripts/types";


import dyna_scriptures_data from "#src/data/dyna-scriptures.json" with { type: "json" };
export const dyna_scriptures = process_dyna_scriptures(dyna_scriptures_data);


function process_dyna_scriptures(raw: any)
{
  // MIGRATE: shape needs to change
  let out: {
    [chapter: string]: Record<string, DynamicScripture>
  } = {};

  for (let [chapter, pages] of Object.entries(raw)) {
    chapter = chapter.toLowerCase();

    out[chapter] = {};

    for (let [page, data] of Object.entries(pages as Record<string, DynamicScripture>)) {
      out[chapter][page] = new DynamicScripture(data);
    }
  }

  return out;
}
