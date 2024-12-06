import type { Latex, TextBlock } from "./root";

/**
 * Represents a generic question.
 */
export class Question
{
  title?: string;
  desc?: string;
  date?: Date;
  tags: string[];

  /** The question line. */
  question: Latex | TextBlock = "";

  /** A hint. */
  hints?: TextBlock[];

  /** The intended solution. */
  solution?: TextBlock[];

  /** Alternate solutions. */
  alternates?: TextBlock[];

  constructor(data: Partial<Question>)
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
