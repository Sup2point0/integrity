/**
 * Handles loading question data.
 */

import { derivatives } from "#src/data/speedrun-questions";

import { Question, DynamicScripture } from "#scripts/types";
import type { QuestionsData, QuestionCollection, Page } from "#scripts/types";


import questions_data from "../data/questions.json" with { type: "json" };;
export const questions = process_questions(questions_data);

import pages_data from "../data/site.json" with { type: "json" };;
export const pages = pages_data.pages;
export const index = pages_data.index;
export const scriptures = find_scriptures(pages);

import dyna_scriptures_data from "../data/scriptures.json" with { type: "json" };;
export const dyna_scriptures = process_dyna_scriptures(dyna_scriptures_data);


function process_questions(raw: any)
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


function find_scriptures(raw: any)
{
  let out: {
    [topic: string]: Page[]
  } = {};

  for (let p of Object.values(raw)) {
    let page = p as Page;

    if (page.index?.includes("scriptures")) {
      let topic: string = page.index[1];

      if (out[topic] == null) {
        out[topic] = [];
      }
      out[topic].push(page);
    }
  }
  
  return out;
}


function process_dyna_scriptures(raw: any)
{
  let out: {
    [chapter: string]: {
      [page: string]: DynamicScripture;
    }
  } = {};

  for (let [chapter, pages] of Object.entries(raw)) {
    chapter = chapter.toLowerCase();

    out[chapter] = {};

    for (let [page, data] of Object.entries(pages)) {
      out[chapter][page] = new DynamicScripture(data);
    }
  }

  return out;
}
