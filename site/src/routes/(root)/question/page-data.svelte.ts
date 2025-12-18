import type { Question } from "#scripts/types";


interface QuestionPageData {
  question: Question | null;
}

export let page_data: QuestionPageData = $state({ question: null });
