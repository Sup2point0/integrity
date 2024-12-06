import type { Latex, TextBlock } from "./root";

/**
 * Represents a generic question.
 */
export class Question
{
  title?: string;
  desc?: string;
  date?: Date;
  tags: string[] = [];

  /** The question line. */
  question: Latex | TextBlock = "";

  /** A hint. */
  hints: TextBlock[];

  /** The intended solution. */
  solution?: TextBlock[];

  /** Alternate solutions. */
  alternates?: TextBlock[];

  constructor(data: Partial<Question>)
  {
    Object.assign(this, data);
  }
}
