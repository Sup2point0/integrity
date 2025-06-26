/**
 * Exposes the `search` object and associated `SearchPrefs` class for storing search preferences and filters.
 */

import sample from "@stdlib/random-sample";
import * as fuzz from "fuzzball";

import { persisted, type Serializer } from "svelte-persisted-store";

import { get } from "svelte/store";

import userprefs from "./user-prefs.svelte.ts";
import type { UserPrefs, Question } from "#scripts/types";


interface States {
  [key: string]: boolean;
}

export class SearchPrefs
{
  query: string = $state("");

  tags: States = $state({});
  methods: States = $state({});

  include: States = $state({
    solved: false,
    flagged: false,
    starred: false,
    featured: false,
    "has hints": false,
  });
  exclude: States = $state({
    solved: false,
    flagged: false,
    starred: false,
    featured: false,
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

  view: "grid" | "list" | "grid-wide" = $state("grid");
  sort: "date" | "name" | "rel" | "rand" | null = $state(null);
  reverse: boolean = $state(false);

  /** Whether search filters should be expanded. */
  expanded = $state(true);


  /** Expose attributes for syncing to localStorage. */
  to_json(): object
  {
    return {
      include: this.include,
      exclude: this.exclude,
      show: this.show,
      buttons: this.buttons,
      view: this.view,
      sort: this.sort,
      reverse: this.reverse,
      expanded: this.expanded,
    }
  }

  /** Load attributes from `localStorage` JSON. */
  set_from_json(data: Partial<SearchPrefs>): SearchPrefs
  {
    this.include = data.include ?? this.include;
    this.exclude = data.exclude ?? this.exclude;
    this.show = data.show ?? this.show;
    this.buttons = data.buttons ?? this.buttons;
    
    this.view = data.view ?? this.view;
    this.sort = data.sort ?? this.sort;
    this.reverse = data.reverse ?? this.reverse;
    this.expanded = data.expanded ?? this.expanded;

    return this;
  }


  /** Reset all search options to their defaults. */
  reset_defaults()
  {
    // TODO
  }

  /** Apply the filters to the given list of questions. */
  filter_questions(
    questions: Question[],
  ): Question[]
  {
    let out: Question[] = [...questions];

    let data = get(userprefs);
  
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

    if (Object.values(this.methods).includes(true)) {
      out = out.filter(
        question => Object.keys(this.methods).some(method =>
          this.methods[method] && question.methods.includes(method)
        )
      );
    }

    if (this.include.solved) {
      out = out.filter(question => data.solved.has(question.shard));
    } else if (this.exclude.solved) {
      out = out.filter(question => !data.solved.has(question.shard));
    }

    if (this.include.flagged) {
      out = out.filter(question => data.flagged.has(question.shard));
    } else if (this.exclude.solved) {
      out = out.filter(question => !data.flagged.has(question.shard));
    }

    if (this.include.starred) {
      out = out.filter(question => data.starred.has(question.shard));
    } else if (this.exclude.solved) {
      out = out.filter(question => !data.starred.has(question.shard));
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
          out = this.sort_rel(out, data);
          break;
        
        case "date":
          out = this.sort_date(out);
          break;
        
        case "name":
          out.sort((prot, deut) => (prot.title && deut.title) ? prot.title.localeCompare(deut.title) : -1);
          break;

        case "rand":
          out = sample(out, { replace: false });
      }
    }
    else if (!this.query) {
      out = this.sort_rel(out, data);
    }
  
    if (this.reverse) {
      out.reverse();
    }
  
    return out;
  }

  sort_rel(source: Question[], data: UserPrefs) {
    if (typeof Object.groupBy === "undefined") return this.sort_date(source);
    
    let categories = Object.groupBy(source, question => this.categorise_rel(question, data));

    for (let category of Object.values(categories)) {
      // @ts-ignore
      category.sort((prot, deut) => (prot.date && deut.date) ? (deut.date - prot.date) : -1);
    }

    return Object.values(categories).flatMap(category => category);
  }

  categorise_rel(question: Question, data: UserPrefs)
  {
    if (data.flagged.has(question.shard)) return 5;
    if (data.starred.has(question.shard)) return 40;
    if (data.solved.has(question.shard)) return 50;
    return 10;
  }

  sort_date(source: Question[]) {
    // @ts-ignore
    return source.sort((prot, deut) => (prot.date && deut.date) ? (deut.date - prot.date) : -1);
  }
}


class SearchPrefsSerializer implements Serializer<SearchPrefs>
{
  parse(data: string): SearchPrefs
  {
    return new SearchPrefs().set_from_json(JSON.parse(data));
  }

  stringify(data: SearchPrefs): string
  {
    return JSON.stringify(data.to_json());
  }
}

/** Search options for the current page. */
export const search = persisted("integrity.search", new SearchPrefs(), {
  serializer: new SearchPrefsSerializer(),
  syncTabs: true,
});
