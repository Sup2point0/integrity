import Site from "#scripts/site";


/** Randomly pick a question and return its URL params. */
export function pick_random_question(): string
{
  let topic = Object.keys(Site.questions).filter(topic => topic !== "derivatives");
  let random_topic = topic[Math.floor(Math.random() * topic.length)];

  let questions = Site.get_questions_of_topic(random_topic);
  let random_question = questions[Math.floor(Math.random() * questions.length)];
  return `${random_topic}?shard=${random_question.shard}`;
}


/** Randomly pick a guide and return its internal URL. */
export function pick_random_guide(): string
{
  let pages = Site.get_list_of_all_guides();
  let page = pages[Math.floor(Math.random() * pages.length)];
  return page.dest;
}
