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
  let collection: QuestionCollection;

  for (let [kind, questions] of Object.entries(raw)) {
    collection = construct_collection(questions)
    out[kind] = collection;
  }

  return out;
}


function construct_collection(raw: any): QuestionCollection
{
  let out: QuestionCollection = {
    tags: [],
    questions: {},
  };

  let question: Question;

  for (let [shard, data] of Object.entries(raw)) {
    question = new Question(data);
    out.questions[shard] = question;
    
    for (let tag of question.tags) {
      if (out.tags.includes(tag)) continue;
      out.tags.push(tag);
    }
  }

  return out;
}
