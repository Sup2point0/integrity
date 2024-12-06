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
  hints?: TextBlock[];

  /** The intended solution. */
  solution?: TextBlock[];

  /** Alternate solutions. */
  alternates?: TextBlock[];

  constructor(data: Partial<Question>)
  {
    Object.assign(this, data);
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
  tags: TagDictionary;
  questions: QuestionDictionary;
}

/**
 * A dictionary of questions from a single topic.
 */
export interface QuestionDictionary
{
  [shard: string]: Question;
}

/**
 * An index of tags and questions with those tags.
 */
export interface TagDictionary
{
  [tag: string]: string[];
}
