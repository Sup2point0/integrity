export type * from "./root";

export { Question } from "./question";
export type * from "./question";

/* bit strange to hijack the other directory's exports, but this provides a more ergonomic interface overall... */
export type { UserPrefs } from "../stores/user-prefs.svelte.ts";
export type { SearchData } from "../stores/search.svelte.ts";
// export type { SpeedrunOptions } from "../stores/speedrun.svelte.ts";
