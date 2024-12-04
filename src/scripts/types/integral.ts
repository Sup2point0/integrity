import type { Latex } from "./root";


export class Integral
{
  name?: string;
  desc?: string;
  date?: Date;
  tags: string[] = [];

  /** The question line. */
  body: Latex = "";

  /** A hint. */
  hint: Latex | null = null;

  /** The intended solution. */
  solution?: IntegralData;

  /** Alternate solutions. */
  alternates?: IntegralData[];

  constructor(data: Partial<Integral>)
  {
    Object.assign(this, data);
  }
}

export interface IntegralData
{
  ctx: "continue" | "new";
  body: Latex;
}
