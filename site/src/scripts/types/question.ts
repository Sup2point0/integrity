import type { Shard, Latex, Block } from "./root";

/** Represents a generic question. */
export class Question
{
  /** A collection of the question's key information for use in fuzzy searching. */
  _match: string[];

  shard: Shard;
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
  solution?: Block | Block[];

  /** Alternate solutions. */
  alternates?: Block[];

  /** Expressions to show in a Desmos graph. */
  desmos?: Block | Block[];

  /** Bounds of the viewport for a graph question. */
  "graph-bounds"?: number;

  constructor(data: any)
  {
    Object.assign(this, data);
    this.question = data.question && data.question[0];
    this.date_display = data.date;
    try {
      this.date = new Date(data.date);
    } catch {
      this.date = new Date();
    }
    this.answer = Array.isArray(data.answer) ? data.answer[0] : data.answer;

    this._match = [
      this.shard.toLowerCase(),
      this.title?.toLowerCase(),
      ...(this.tags ?? []),
      ...(this.methods ?? []),
    ].filter(each => each);

    if (typeof this.question?.content === "string") {      
      this.question.content = this.question.content.replaceAll(/\s\s+/g, " ");
    }
  }

  /** Sanitises the LaTeX of the question so that it can easily be injected into Desmos. */
  static sanitise(latex?: Latex | null): Latex | null
  {
    if (typeof latex !== "string") {
      return null;
    }

    let out = latex;

    // standardise brackets
    out = out.replaceAll(
      /\\(sin|cos|tan|sec|cot|csc)\^([\d])[\(\{]([a-z])[\)\}]/g,
      "\\$1\\left($3\\right)^$2"
    );
    out = out.replaceAll(
      /\\(sin|cos|tan|sec|cot|csc)[\(\{]([a-z])[\)\}]/g,
      "\\$1\\left($2\\right)"
    );
    out = out.replaceAll(
      /\\(sin|cos|tan|sec|cot|csc) x([\\\+])/g,
      "\\$1\\left(x\\right)$2"
    );

    // brackets
    out = out.replaceAll(
      /\\left\[/g,
      "\\left("
    );
    out = out.replaceAll(
      /\\right\]/g,
      "\\right)"
    );

    return out;
  }
}


/** A dictionary of questions from a single topic. */
export interface QuestionDictionary
{
  [shard: Shard]: Question;
}

/** A collection of questions from a single topic, along with their tags and methods. */
export interface QuestionCollection
{
  tags: string[];
  methods: string[];
  questions: QuestionDictionary;
}

/** The entire collection of question in Integrity. */
export interface QuestionsData
{
  [shard: Shard]: QuestionCollection;
}
