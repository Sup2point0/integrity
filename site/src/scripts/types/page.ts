export interface Page
{
  path: string;
  dest: string;

  flags?: string[];

  title?: string;
  desc?: string;

  head?: string;
  capt?: string;

  index?: string[];
  
  date_display?: string;
}
