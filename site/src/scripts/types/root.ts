/** A raw LaTeX string. */
export type Latex = string;

export interface TextBlock
{
  title: string;
  body: (string | Latex)[];
}
