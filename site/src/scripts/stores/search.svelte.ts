/**
 * Exposes the `search` object and associated `SearchData` class for storing search this. This does not persist between pages.
 */

import type { Question } from "#scripts/types";


interface States {
  [key: string]: boolean;
}

export class SearchData
{
  query: string = $state("");
  tags: States = $state({});

  include: States = $state({
    solved: false,
    flagged: false,
    starred: false,
    unnamed: false,
    "has hints": false,
  });
  exclude: States = $state({
    solved: false,
    flagged: false,
    starred: false,
    unnamed: false,
    "has hints": false,
  })

  show: States = $state({
    question: true,
    dates: true,
    tags: true,
  });

  view: "grid" | "list" = $state("grid");
  sort: "date" | "name" | "rel" | null = $state(null);
  reverse: boolean = $state(false);

  filter_questions(
    questions: Question[],
  ): Question[]
  {
    let out: Question[] = [...questions];
  
    // Filter
    if (Object.values(this.tags).includes(true)) {
      out = out.filter(
        question => Object.keys(this.tags).some(tag =>
          this.tags[tag] && question.tags.includes(tag)
        )
      );
    }
  
    if (this.include.unnamed) {
      out = out.filter(question => !question.title);
    } else if (this.exclude.unnamed) {
      out = out.filter(question => question.title);
    }
  
    if (this.include.hints) {
      out = out.filter(question => question.hints?.length > 0);
    } else if (this.exclude.hints) {
      out = out.filter(question => !(question.hints?.length > 0));
    }
  
    // Search
    if (this.query) {
      let query: string = this.query.toLowerCase();
  
      out = questions.filter(question => {
        return (
          question.title && question.title.toLowerCase().includes(query) ||
          // question.desc && question.desc.toLowerCase().includes(query) ||
          question.tags && question.tags.some(tag => tag.toLowerCase().includes(query))
        );
      });
    }
  
    // Sort
    if (this.sort) {
      switch (this.sort) {
        case "rel":
          this.sort_rel(out);
          break;
        
        case "name":
          out.sort((prot, deut) => (prot.title && deut.title) ? prot.title.localeCompare(deut.title) : -1);
          break;
        
        case "date":
          this.sort_date(out);
          break;
      }
    } else {
      if (this.query) {
        this.sort_rel(out);
      } else {
        this.sort_date(out);
      }
    }
  
    if (this.reverse) {
      out.reverse();
    }
  
    return out;
  }

  sort_rel(source: Question[]) {
    return source;  // TODO
  }

  sort_date(source: Question[]) {
    return source.sort((prot, deut) => (prot.date && deut.date) ? deut.date - prot.date : -1);
  }
}

/** Search options for the current page. */
export const search = new SearchData();
