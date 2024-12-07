import { data } from "./data";
import type { Question, QuestionsData } from "#scripts/types";


interface SiteData {
  questions: QuestionsData;

  get_questions: (topic: string) => Question[];
}

const Site: SiteData = {
  questions: data,

  get_questions: (topic) => {
    return Object.values(Site.questions[topic]?.questions ?? {});
  }
};

export default Site;
