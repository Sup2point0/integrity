export type * from "./root";

export type { Page } from "./page";

export { Question } from "./question";
export type * from "./question";

/* bit strange to hijack the other directory's exports, but this provides a more ergonomic interface overall... */
export type { UserPrefs } from "../stores/user-prefs.svelte.ts";
export type { SearchPrefs } from "../stores/search.svelte.ts";
export type { SpeedrunData } from "../stores/speedrun.svelte.ts";
