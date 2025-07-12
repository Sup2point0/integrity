import type { Shard, Latex, Block } from "./root";

/**
 * Represents a question.
 * 
 * The question content is either stored in `.question`, in which case it is rendered as LaTeX, or `.desmos`, in which case it is displayed with a Desmos embed.
 */
export class Question
{
  /** A collection of the question's key information for use in fuzzy searching. */
  _match: string[];

  shard: Shard;
  topic: string;
  difficulty: "based" | "incline" | "manifold" | "chaos" | null = null;

  title?: string;
  desc?: string;
  date?: Date;
  date_display?: string;

  tags: string[] = [];
  methods: string[] = [];
  flags: string[] = [];

  /** The question line. */
  question?: Block;

  /** Expressions to show in a Desmos graph. */
  desmos?: Block;

  /** Extra notes for clarification. */
  notes?: Block;

  /** Answers to choose from for multiple-choice questions. */
  options?: {
    index: number,
    latex: Block[] | string[],
  };

  /** A hint. */
  hints?: {
    [idx: string]: Block[]
  };

  /** The short displayed answer. For a multiple-choice question, this defaults to the 1st option. */
  answer?: Block;

  /** The intended solution. */
  solution?: Block | Block[];

  /** Alternate solutions. */
  alternates?: Block[];

  /** Bounds of the viewport for a graph question. */
  "graph-bounds"?: number;


  constructor(data: any, process = true)
  {
    Object.assign(this, data);

    if (!process) return;

    this.question = data.question && data.question[0];
    this.date_display = data.date.toString();
    try {
      this.date = new Date(data.date);
    } catch {
      this.date = new Date();
    }
    this.answer = Array.isArray(data.answer) ? data.answer[0] : data.answer;

    // @ts-ignore
    this._match = [
      // @ts-ignore
      this.shard.toLowerCase(),
      this.title?.toLowerCase(),
      ...(this.tags ?? []),
      ...(this.methods ?? []),
    ].filter(Boolean);

    if (this.topic === "graph-drawing") {
      this.options = data.options[0].content.split("<br><br>").map(
        (latex, index) => ({ index, latex })
      );
    }

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
  questions: QuestionDictionary;
  tags?: string[];
  methods?: string[];
}

/** The entire collection of question in Integrity. */
export interface QuestionsData
{
  [topic: string]: QuestionCollection;
}
