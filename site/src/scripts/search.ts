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

  if (options.include.unnamed) {
    out = out.filter(question => !question.title);
  } else if (options.exclude.unnamed) {
    out = out.filter(question => question.title);
  }

  if (options.include.hints) {
    out = out.filter(question => question.hints?.length > 0);
  } else if (options.exclude.hints) {
    out = out.filter(question => !(question.hints?.length > 0));
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
