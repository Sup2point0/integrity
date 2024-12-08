/**
 * Exposes the `search` object and associated `SearchData` class for storing search options. This does not persist between pages.
 */

export class SearchData
{
  query: string = $state("");
  tags: States = $state({});

  show: States = $state({
    dates: true,
    tags: true,
  });

  include: States = $state({
    solved: true,
    unnamed: true,
    hints: true,
  });

  sort: "date" | "name" | "tags" | null = $state(null);
  reverse: boolean = $state(false);
}

interface States {
  [key: string]: boolean;
}

/** Search options for the current page. */
export const search = new SearchData();
