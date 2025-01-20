/**
 * Exposes the `search` object and associated `SearchData` class for storing search this. This does not persist between pages.
 */

import sample from "@stdlib/random-sample";

import type { Question } from "#scripts/types";


interface States {
  [key: string]: boolean;
}

export class SearchData
{
  query: string = $state("");
  tags: States = $state({});
  methods: States = $state({});

  include: States = $state({
    solved: false,
    flagged: false,
    starred: false,
    featured: false,
    unnamed: false,
    "has hints": false,
  });
  exclude: States = $state({
    solved: false,
    flagged: false,
    starred: false,
    featured: false,
    unnamed: false,
    "has hints": false,
  })

  show: States = $state({
    question: true,
    dates: true,
    tags: true,
    methods: false,
  });

  view: "grid" | "list" = $state("grid");
  sort: "date" | "name" | "rel" | "rand" | null = $state(null);
  reverse: boolean = $state(false);


  filter_questions(
    questions: Question[],
  ): Question[]
  {
    let out: Question[] = [...questions];
  
    // Filter
    /* we could optimise the order of applying filters so those that cut out the greatest proportion are applied first (thereby speeding up later filters), but this doesn't really impact performance enough to warrant that lmao */
    if (Object.values(this.tags).includes(true)) {
      out = out.filter(
        question => Object.keys(this.tags).some(tag =>
          this.tags[tag] && question.tags.includes(tag)
        )
      );
    }

    /* TODO filter by method */
    // if (Object.values(this.methods).includes(true)) {
    //   out = out.filter(
    //     question => Object.keys(this.methods).some(method =>
    //       this.methods[method] && question.methods.includes(method)
    //     )
    //   );
    // }
  
    if (this.include.unnamed) {
      out = out.filter(question => !question.title);
    } else if (this.exclude.unnamed) {
      out = out.filter(question => question.title);
    }

    if (this.include.featured) {
      out = out.filter(question => question.flags?.includes("feat"));
    } else if (this.exclude.featured) {
      out = out.filter(question => !(question.flags?.includes("feat")));
    }
  
    if (this.include.hints) {
      out = out.filter(question => question.hints?.length);
    } else if (this.exclude.hints) {
      out = out.filter(question => !(question.hints?.length));
    }
  
    // Search
    if (this.query) {
      let query: string = this.query.toLowerCase();
  
      /* Fast enough for now. Hopefully we don’t run into performance issues as we add more fields to search. */
      out = questions.filter(question => {
        return (
          question.shard.includes(query) ||
          question.title && question.title.toLowerCase().includes(query) ||
          // question.desc && question.desc.toLowerCase().includes(query) ||
          question.tags && question.tags.some(tag => tag.toLowerCase().includes(query)) ||
          question.methods && question.methods.some(method => method.toLowerCase().includes(query))
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

        case "rand":
          out = sample(out, { replace: false });
      }
    }
    else {
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
