import type { Latex, Block } from "./root";

/**
 * Represents a generic question.
 */
export class Question
{
  shard: string;

  title?: string;
  desc?: string;
  date?: Date;
  tags: string[];

  /** The question line. */
  question: Block;

  /** Extra notes for clarification. */
  notes?: Block;

  /** A hint. */
  hints?: { [idx: string]: Block[] };

  /** The short displayed answer. */
  answer?: Block;

  /** The intended solution. */
  solution?: Block[];

  /** Alternate solutions. */
  alternates?: Block[];

  constructor(data: any)
  {
    Object.assign(this, data);
    this.question = data.question[0];
    // this.title = data.title;
    // this.desc = data.desc;
    // this.date = data.date && new Date(data.date);
    // this.tags = data.tags ?? [];
    // this.question = data.question;
  }
}

/**
 * All the collections of questions from different topics.
 */
export interface QuestionsData
{
  [shard: string]: QuestionCollection;
}

/**
 * A collection of questions from a single topic.
 */
export interface QuestionCollection
{
  tags: string[];
  questions: QuestionDictionary;
}

/**
 * A dictionary of questions from a single topic.
 */
export interface QuestionDictionary
{
  [shard: string]: Question;
}
