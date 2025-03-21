/**
 * Exposes the `search` object and associated `SearchData` class for storing search this. This does not persist between pages.
 */

import sample from "@stdlib/random-sample";
import * as fuzz from "fuzzball";

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
    shard: false,
    dates: true,
    tags: true,
    methods: false,
  });

  buttons: States = $state({
    solved: true,
    flag: true,
    star: true,
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
    /* NOTE still true? */
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
    /* string matching is heavy, so do this after filtering as much as we can */
    if (this.query) {
      let query = this.query.toLowerCase();
      let limit = Math.max(Math.round((1.44 ** -query.length) * questions.length), 2);
  
      let matches = fuzz.extract(query, questions, {
        scorer: (query, question) => (
          Math.max(...question._match.map(
            each => fuzz.ratio(each, query)
          ))
        ),
        limit,
      });

      if (limit < 2 && matches[0][1] < 50) {
        return [];  /* no relevant results */
      } else {
        out = matches.map(each => each[0])
      }
    }
  
    // Sort
    if (this.sort) {
      switch (this.sort) {
        case "rel":
          /* already sorted by relevance */
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
    else if (!this.query) {
      this.sort_date(out);
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
