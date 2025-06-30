/**
 * Exposes the `userprefs` object and associated `UserPrefs` class for storing user preferences and data. This is synced with `localStorage`.
 */

import { persisted, type Serializer } from "svelte-persisted-store";

import { SvelteSet } from "svelte/reactivity";


export class UserPrefs
{
  /** Timestamp of last data export. */
  saved?: number = $state();

  /** Number of visits to the site. */
  visits: number = $state(0);

  /** Shards of questions whose pages have been visited before. */
  seen: Set<string> = new Set();

  /** Shards of questions marked as solved. */
  solved: Set<string> = new Set();

  /** shards of flagged questions. */
  flagged: Set<string> = new Set();

  /** Shards of starred questions. */
  starred: Set<string> = new Set();

  skipped: SvelteSet<string> = $state(new SvelteSet());
  marked: SvelteSet<string> = $state(new SvelteSet());

  /** Preset of the Workspace Desmos window. */
  "desmos-preset": "integrals" | "complete-square" | null = $state("integrals");

  nav: boolean = $state(true);


  /** Expose attributes for syncing to localStorage. */
  to_json(): object
  {
    return {
      saved: this.saved,
      visits: this.visits,
      seen: Array.from(this.seen),
      solved: Array.from(this.solved),
      flagged: Array.from(this.flagged),
      starred: Array.from(this.starred),
      
      nav: this.nav,
      "desmos-preset": this["desmos-preset"],
      skipped: Array.from(this.skipped),
      marked: Array.from(this.marked),
    }
  }

  /** Load attributes from `localStorage` JSON. */
  set_from_json(data: Partial<UserPrefs>): UserPrefs
  {
    // TODO surely we can come up with a better way...
    this.saved = data.saved ?? this.saved;
    this.visits = data.visits ?? this.visits;
    this.seen = new Set(data.seen ?? this.seen);
    this.solved = new Set(data.solved ?? this.solved);
    this.flagged = new Set(data.flagged ?? this.flagged);
    this.starred = new Set(data.starred ?? this.starred);

    this.nav = data.nav ?? this.nav;
    this["desmos-preset"] = data["desmos-preset"] ?? this["desmos-preset"];
    this.skipped = new SvelteSet(data.skipped ?? this.skipped);
    this.marked = new SvelteSet(data.marked ?? this.marked);

    return this;
  }

  get question() {
    return this.skipped;
  }
  
  get questions() {
    return this.marked;
  }
}


class UserPrefsSerializer implements Serializer<UserPrefs>
{
  parse(data: string): UserPrefs
  {
    return new UserPrefs().set_from_json(JSON.parse(data));
  }

  stringify(data: UserPrefs): string
  {
    return JSON.stringify(data.to_json());
  }
}


/** User data and preferences. */
const userprefs = persisted("integrity.prefs", new UserPrefs(), {
  serializer: new UserPrefsSerializer(),
  syncTabs: true,
});
export default userprefs;
