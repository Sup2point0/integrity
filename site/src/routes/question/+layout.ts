import { error } from "@sveltejs/kit";

import Site from "#scripts/site";
import type { Question, QuestionCollection } from "#scripts/types";

interface QuestionPageData
{
  question: Question;
}


export function load({ url }): QuestionPageData
{
  let topic: string | undefined = url.pathname.split("/").at(-1);
  if (topic == null) {
    error(400, { message: "URL is missing topic" });
  }

  let params = url.searchParams;
  let shard: string | null = params.get("shard");
  if (shard == null) {
    error(400, { message: "URL is missing question shard" });
  }

  let questions: QuestionCollection = Site.questions[topic];
  if (questions == null) {
    error(500, { message: "Could not load questions for topic" });
  }

  let question: Question = questions.questions[shard];
  if (question == null) {
    error(404, { message: "Could not find question" });
  }

  return {
    question: question,
  };
}
