import { data } from "./data";
import type { QuestionsData } from "#scripts/types";


interface SiteData {
  questions: QuestionsData;
}

const Site: SiteData = {
  questions: data,
};

Site.get_questions = (topic: string) => {
  return Object.values(Site.questions[topic].questions);
}

export default Site;
console.log("site =", Site.questions)
