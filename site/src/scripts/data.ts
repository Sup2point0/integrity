/**
 * Handles loading question data.
 */

import { Question } from "#scripts/types";
import type { QuestionsData, QuestionCollection } from "#scripts/types";


const raw_data = (await import("../data/questions.json")).default;
export const data = process_data(raw_data);


function process_data(raw: any)
{
  let out: QuestionsData = {};

  for (let [kind, questions] of Object.entries(raw)) {
    out[kind] = construct_questions(questions);
  }

  return out;
}


function construct_questions(raw: any): QuestionCollection
{
  let out: QuestionCollection = {};

  for (let [kind, data] of Object.entries(raw)) {
    out[kind] = new Question(data);
  }

  return out;
}
