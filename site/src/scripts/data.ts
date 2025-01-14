/**
 * Handles loading question data.
 */

import { Question } from "#scripts/types";
import type { QuestionsData, QuestionCollection } from "#scripts/types";


const questions_data = (await import("../data/questions.json")).default;
export const questions = process_questions(questions_data);

const pages_data = (await import("../data/site.json")).default;
export const guides = find_guides(pages_data.pages);


function process_questions(raw: any)
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
  let tags_set = new Set<string>();
  let questions: Record<string, Question> = {};

  let tag: string;
  let question: Question;

  for (let [shard, data] of Object.entries(raw)) {
    question = new Question(data);
    questions[shard] = question;
    
    for (tag of question.tags) {
      tags_set.add(tag);
    }
  }

  let tags = Array.from(tags_set).sort();

  return { tags, questions };
}


function find_guides(raw: any)
{
  let out = {};

  for (let page of Object.values(raw)) {
    if (page.index.includes("guides")) {
      let topic = page.index[1];

      if (out[topic] == null) {
        out[topic] = [];
      }
      out[topic].push(page);
    }
  }
  
  return out;
}
