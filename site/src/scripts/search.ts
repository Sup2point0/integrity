import type { Question } from "#scripts/types";
import type { SearchData } from "#scripts/stores";


export function filter_questions(
  questions: Question[],
  options: SearchData,
): Question[]
{
  let out: Question[] = [...questions];

  // Filter
  if (Object.values(options.tags).includes(true)) {
    out = out.filter(
      question => Object.keys(options.tags).some(tag =>
        options.tags[tag] && question.tags.includes(tag)
      )
    );
  }

  if (options.include.unnamed === false) {
    out = out.filter(question => question.title);
  }
  if (options.include.hints === false) {
    out = out.filter(question => !question.hints);
  }

  // Search
  if (options.query) {
    let query: string = options.query.toLowerCase();

    out = questions.filter(question => {
      return (
        question.title && question.title.toLowerCase().includes(query) ||
        // question.desc && question.desc.toLowerCase().includes(query) ||
        question.tags && question.tags.some(tag => tag.toLowerCase().includes(query))
      );
    });
  }

  // Sort

  return out;
}
