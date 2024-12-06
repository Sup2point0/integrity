/**
 * Handles loading question data.
 */

import { Question } from "#scripts/types";
import type { QuestionsData, QuestionCollection, TagDictionary } from "#scripts/types";


const raw_data = (await import("../data/questions.json")).default;
export const data = process_data(raw_data);


function process_data(raw: any)
{
  let out: QuestionsData = {};

  for (let [kind, questions] of Object.entries(raw)) {
    data = construct_questions(questions)
    out[kind] = data;
  }

  return out;
}


function construct_collection(raw: any): QuestionCollection
{
  let out: QuestionCollection = {
    tags: {},
    questions: {},
  };

  let question: Question;

  for (let [shard, data] of Object.entries(raw)) {
    question = new Question(data);
    out.questions[shard] = question;
    
    for (let tag of question.tags) {
      if (!out.tags[tag]) {
        out.tags[tag] = [];
      }

      out.tags[tag].push(shard);
    }
  }

  return out;
}
