import type { Block } from "./root";
import type { Page } from "./page";


export class DynamicScripture implements Page
{
  path: string;
  dest: string;

  title: string;
  topic: string;
  next: string | null;
  update: Date | null;
  sections: Section[] = [];

  constructor(data: any)
  {
    this.path = "";
    this.dest = data.dest;

    this.title = data.title;
    this.topic = data.topic && (data.topic.charAt(0).toUpperCase() + data.topic.slice(1));
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
