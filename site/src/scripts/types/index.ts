import type { PageData } from "stranger-quarkdown";
export type Page = PageData<"long">;  // TODO rename to `PageData`?

export type * from "./root";

export { Topic, TOPIC_DISPLAY_NAMES } from "./topic";

export { Question } from "./question";
export type * from "./question";

export { DynamicScripture } from "./dynamic-scripture";
export type * from "./dynamic-scripture";
