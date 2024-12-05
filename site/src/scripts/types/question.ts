/**
 * Represents a generic question.
 */
export class Question
{
  name?: string;
  desc?: string;
  date?: Date;
  tags: string[] = [];

  /** The question line. */
  body: Latex = "";

  /** A hint. */
  hint?: Latex;

  /** The intended solution. */
  solution?: Latex;

  /** Alternate solutions. */
  alternates?: Latex[];

  constructor(data: Partial<Question>)
  {
    Object.assign(this, data);
  }
}
