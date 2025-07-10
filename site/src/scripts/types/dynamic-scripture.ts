import type { Block } from "./root";
import type { Page } from "./page";


export class DynamicScripture implements Page
{
  path: string;
  dest: string;

  /** The exact displayed title of the page. Use `toLowerCase()` for caseless processing. */
  title: string;

  desc?: Block | Block[];

  /** The exact displayed name of the chapter the page falls under. Use `toLowerCase()` for caseless processing. Referred to as `topic` for ease of internal preprocessing. */
  chapter: string;

  /** The caseless title of the next page in the walkthrough. */
  next: string | null;

  update: Date | null;
  sections: Section[] = [];

  constructor(data: any)
  {
    this.path = "";
    this.dest = data.dest;

    this.title = data.title;
    this.desc = data.description;
    this.chapter = data.topic;
    this.next = data.next;
    try {
      this.update = new Date(data.update);
    } catch {
      this.update = null;
    }

    for (let [key, subsections] of Object.entries(data)) {
      if (key.startsWith("// ")) {
        this.sections.push({
          title: key.slice(2).toUpperCase(),
          subsections: Array.isArray(subsections) ? [subsections] : Object.values(subsections),
        });
      }
    }
  }
}

interface Section {
  title: string;
  subsections: Subsection[];
}

type Subsection = Block[];
