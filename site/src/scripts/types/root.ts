/** A unique identifier for a question, in a format like `s25f-eg1`. */
export type Shard = string;

/** A raw LaTeX string. */
export type Latex = string;

/** A block of text, could be HTML or LaTeX. */
export interface Block
{
  kind: "text" | "latex";
  content: string;
}

/** A block of text and LaTeX. */
export interface TextBlock
{
  title: string;
  body: (string | Latex)[];
}
