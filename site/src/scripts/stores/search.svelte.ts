/**
 * Exposes the `search` object and associated `SearchData` class for storing search options. This does not persist between pages.
 */

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

  view: "grid" | "list" = $state("list");
  sort: "date" | "name" | null = $state(null);
  reverse: boolean = $state(false);
}

interface States {
  [key: string]: boolean;
}

/** Search options for the current page. */
export const search = new SearchData();
