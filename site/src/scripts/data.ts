/**
 * Handles loading question data.
 */

import { Question } from "#scripts/types";
import type { QuestionsData, QuestionCollection } from "#scripts/types";


import questions_data from "../data/questions.json" assert { type: "json" };
export const questions = process_questions(questions_data);

import pages_data from "../data/site.json" assert { type: "json" };
export const pages = pages_data.pages;
export const index = pages_data.index;
export const guides = find_guides(pages);


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
