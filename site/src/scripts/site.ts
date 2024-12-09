import { data } from "./data";
import type { Question, QuestionsData } from "#scripts/types";


interface SiteData {
  /** The base URL of the site. */
  root: string;

  questions: QuestionsData;

  get_questions: (topic: string) => Question[];
}

const Site: SiteData = {
  root: "https://sup2point0.github.io/integrity/",

  questions: data,

  get_questions: (topic) => {
    return Object.values(Site.questions[topic]?.questions ?? {});
  }
};

export default Site;
