import type { Latex, Block } from "./root";

/**
 * Represents a generic question.
 */
export class Question
{
  /** A collection of the question's key information for use in fuzzy searching. */
  _match: string;

  shard: string;
  topic: string;

  title?: string;
  desc?: string;
  date?: Date;
  date_display?: string;

  tags: string[] = [];
  methods: string[] = [];
  flags: string[] = [];

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
    this.date_display = data.date;
    this.date = new Date(data.date);
    // this.title = data.title;
    // this.desc = data.desc;
    // this.date = data.date && new Date(data.date);
    // this.tags = data.tags ?? [];
    // this.question = data.question;

    this._match = [
      this.shard,
      this.title,
      this.tags && this.tags.join(" "),
      this.methods && this.methods.join(" "),
    ].join(" ").toLowerCase();
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
