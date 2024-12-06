/**
 * Handles loading question data.
 */

import { Question } from "#scripts/types";
import type { QuestionsData } from "#scripts/types";


const raw_data = (await import("../data/questions.json")).default;
export const data = process_data(raw_data);


function process_data(raw: any)
{
  let out: QuestionsData = {};
  let kind: string;

  for (let data of raw) {
    kind = data.kind;
    if (!kind) continue;

    if (!out[kind]) {
      out[kind] = {};
    }

    out[kind][data.shard] = new Question(data);
  }

  return out;
}
