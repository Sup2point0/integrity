export { scriptures } from "#src/scripts/data/pages";
export { dyna_scriptures } from "#scripts/data/dyna-scriptures";

import { questions } from "#scripts/data/questions";
import { pages, index } from "#src/scripts/data/pages";
import { scriptures } from "#src/scripts/data/pages";
import type { Question, QuestionsData, Page } from "#scripts/types";


interface SiteData {
  /** The base URL of the site. */
  root: string;

  pages: Record<string, Page>;
  index: Record<string, {
    route: string | null;
    pages: string[];
  }>;
  questions: QuestionsData;

  get_questions_of_topic: (topic: string) => Question[];
  get_list_of_all_questions: () => Question[];
  get_map_of_all_questions: () => Record<string, Question>;
  get_featured_questions: () => Question[];
  get_all_tags: () => string[];
  get_all_methods: () => string[];
}

export const Site: SiteData = {
  root: "https://sup2point0.github.io/integrity/",

  pages,
  index,
  questions,

  get_questions_of_topic: (topic) => {
    return Object.values(Site.questions[topic]?.questions ?? {});
  },

  get_list_of_all_questions: () => {
    return Object.values(Site.questions).flatMap(topic => Object.values(topic.questions));
  },

  get_map_of_all_questions: () => {
    return Object.fromEntries(
      Object.values(Site.questions).flatMap(topic => Object.entries(topic.questions))
    );
  },

  get_featured_questions: () => {
    return Site.get_list_of_all_questions().filter(q => q.flags?.includes("feat"));
  },

  get_all_tags: () => {
    return Array.from(
      new Set(Object.values(Site.questions).flatMap(topic => topic.tags))
    ).filter(method => method !== undefined).sort();
  },

  get_all_methods: () => {
    return Array.from(
      new Set(Object.values(Site.questions).flatMap(topic => topic.methods))
    ).filter(method => method !== undefined).sort();
  },
};

export default Site;




export function get_list_of_all_scriptures(): Page[]
{
  return Object.values(scriptures).flat();
}

export function get_featured_scriptures(): Page[]
{
  return get_list_of_all_scriptures().filter(page => page.flags?.includes("feat"));
}
