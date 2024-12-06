/** A raw LaTeX string. */
export type Latex = string;

/** A block of text and LaTeX. */
export interface TextBlock
{
  title: string;
  body: (string | Latex)[];
}
