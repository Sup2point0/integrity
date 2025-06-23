import { questions, pages, index, guides } from "./data";
import type { Question, QuestionsData, Page } from "#scripts/types";


interface SiteData {
  /** The base URL of the site. */
  root: string;

  pages: Record<string, Page>;
  index: Record<string, Page>;
  questions: QuestionsData;

  get_questions_of_topic: (topic: string) => Question[];
  get_list_of_all_questions: () => Question[];
  get_map_of_all_questions: () => Record<string, Question>;
  get_featured_questions: () => Question[];
  get_all_tags: () => string[];
  get_all_methods: () => string[];
  get_list_of_all_guides: () => Page[];
  get_featured_guides: () => Page[];

  guides: {
    [topic: string]: Page[];
  }
}

const Site: SiteData = {
  root: "https://sup2point0.github.io/integrity/",

  pages,
  index,
  questions,
  guides,

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
      new Set(
        Object.values(Site.questions)
        .flatMap(topic => topic.tags)
      )
    ).sort();
  },

  get_all_methods: () => {
    return Array.from(
      new Set(
        Object.values(Site.questions)
        .flatMap(topic => topic.methods)
      )
    ).sort();
  },

  get_list_of_all_guides: () => {
    return Object.values(Site.guides).flatMap(topic => Object.values(topic));
  },

  get_featured_guides: () => {
    return Site.get_list_of_all_guides().filter(guide => guide.flags?.includes("feat"));
  },
};

export default Site;
