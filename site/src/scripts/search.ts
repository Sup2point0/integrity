import type { Question } from "#scripts/types";
import type { SearchData } from "#scripts/stores";


export function filter_questions(
  questions: Question[],
  options: SearchData,
): Question[]
{
  let out: Question[] = [...questions];

  if (options.query) {
    let query: string = options.query.toLowerCase();

    out = questions.filter(question => {
      return (
        question.title && question.title.toLowerCase().includes(query) ||
        question.desc && question.desc.toLowerCase().includes(query) ||
        question.tags && question.tags.some(tag => tag.toLowerCase().includes(query))
      );
    });
  }

  return out;
}
