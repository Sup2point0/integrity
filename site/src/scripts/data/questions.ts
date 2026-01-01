import { derivatives } from "#src/data/speedrun-questions";

import { Question } from "#scripts/types";
import type { QuestionsData, QuestionCollection } from "#scripts/types";


import questions_data from "#src/data/questions.json" with { type: "json" };
export const questions = process_questions(questions_data);


function process_questions(raw: object)
{
  let out: QuestionsData = {};
  let collection: QuestionCollection;

  for (let [topic, questions] of Object.entries(raw)) {
    collection = construct_collection(questions)
    out[topic] = collection;
  }

  out["derivatives"] = {
    questions: Object.fromEntries(
      derivatives.map(q => [q.shard, new Question(q, false)])
    )
  }

  return out;
}


function construct_collection(raw: any): QuestionCollection
{
  let questions: Record<string, Question> = {};
  let tags_set = new Set<string>();
  let methods_set = new Set<string>();

  let question: Question;
  let tag: string;
  let method: string;

  for (let [shard, data] of Object.entries(raw)) {
    question = new Question(data);
    questions[shard] = question;
    
    for (tag of question.tags) {
      if (tag === null) continue;
      tags_set.add(tag);
    }
    for (method of question.methods) {
      if (method === null) continue;
      methods_set.add(method);
    }
  }

  let tags = Array.from(tags_set).sort();
  let methods = Array.from(methods_set).sort();

  return { questions, tags, methods };
}
