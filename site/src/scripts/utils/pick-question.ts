import Site from "#scripts/site";


export function pick_random_question(): string
{
  let topic = Object.keys(Site.questions);
  let random_topic = topic[Math.floor(Math.random() * topic.length)];

  let questions = Site.get_questions_of_topic(random_topic);
  let random_question = questions[Math.floor(Math.random() * questions.length)];
  return `${random_topic}?shard=${random_question.shard}`;
}
