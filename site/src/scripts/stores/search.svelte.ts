/**
 * Exposes the `search` object and associated `SearchData` class for storing search options. This does not persist between pages.
 */

export class SearchData
{
  query: string = $state("");
  tags: TagStates = $state({ sup: null });
}

interface TagStates {
  [tag: string]: boolean;
}

export const search = new SearchData();
