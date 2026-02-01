/** Data for a page on the site, exported by Squarkdown. */
export interface Page
{
  path: string;
  dest: string;

  flags?: string[];

  title?: string | null;
  desc?:  string | null;

  head?: string | null;
  capt?: string | null;

  index?: string[];
  
  date_display?: string | null;
  update_display?: string | null;
}
