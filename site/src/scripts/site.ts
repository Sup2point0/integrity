import { questions, guides } from "./data";
import type { Question, QuestionsData } from "#scripts/types";


interface SiteData {
  /** The base URL of the site. */
  root: string;

  questions: QuestionsData;

  get_questions: (topic: string) => Question[];
  get_all_questions: () => Question[];
  get_all_tags: () => string[];
  get_featured: () => Question[];

  guides: {
    [topic: string]: Question[];
  }
}

const Site: SiteData = {
  root: "https://sup2point0.github.io/integrity/",

  questions: questions,

  get_questions: (topic) => {
    return Object.values(Site.questions[topic]?.questions ?? {});
  },

  get_all_questions: () => {
    return Object.values(Site.questions).flatMap(topic => Object.values(topic.questions))
  },

  get_all_tags: () => {
    return Object.values(Site.questions).flatMap(topic => topic.tags)
  },

  get_featured: () => {
    return Site.get_all_questions().filter(q => q.flags?.includes("feat"))
  },

  guides: guides,
};

export default Site;
