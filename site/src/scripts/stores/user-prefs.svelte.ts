/**
 * Exposes the `userprefs` object and associated `UserPrefs` class for storing user preferences and data. This is synced with `localStorage`.
 */

import { persisted, type Serializer } from "svelte-persisted-store";

import { Topic, type Shard } from "#scripts/types";

import { SvelteSet } from "svelte/reactivity";


export class UserPrefs
{
  /** Timestamp of last data export. */
  saved?: number = $state();

  /** Number of visits to the site. */
  visits: number = $state(0);

  /** Shards of questions whose pages have been visited before. */
  seen = new SvelteSet<Shard>();

  /** Shards of questions marked as solved. */
  solved = new SvelteSet<Shard>();

  /** Shards of flagged questions. */
  flagged = new SvelteSet<Shard>();

  /** Shards of starred questions. */
  starred = new SvelteSet<Shard>();

  skipped = new SvelteSet<Shard>();

  marked = new SvelteSet<Shard>();

  /** Preset of the Workspace Desmos window. */
  "desmos-preset": Topic.INTEGRALS | Topic.COMPLETE_SQUARE | null = $state(Topic.INTEGRALS);

  nav: boolean = $state(true);

  style: string = $state("");


  /** Expose attributes for syncing to localStorage. */
  to_json(): object
  {
    return {
      saved:   this.saved,
      visits:  this.visits,
      seen:    Array.from(this.seen),
      solved:  Array.from(this.solved),
      flagged: Array.from(this.flagged),
      starred: Array.from(this.starred),
      skipped: Array.from(this.skipped),
      marked:  Array.from(this.marked),
      nav:     this.nav,
      style:   this.style,
      "desmos-preset": this["desmos-preset"],
    }
  }

  /** Load attributes from `localStorage` JSON. */
  set_from_json(data: Partial<UserPrefs>): UserPrefs
  {
    this.saved   = data.saved  ?? this.saved;
    this.visits  = data.visits ?? this.visits;
    this.seen    = new SvelteSet(data.seen ?? this.seen);
    this.solved  = new SvelteSet(data.solved ?? this.solved);
    this.flagged = new SvelteSet(data.flagged ?? this.flagged);
    this.starred = new SvelteSet(data.starred ?? this.starred);
    this.skipped = new SvelteSet(data.skipped ?? this.skipped);
    this.marked  = new SvelteSet(data.marked ?? this.marked);
    this.nav     = data.nav   ?? this.nav;
    this.style   = data.style ?? this.style;
    this["desmos-preset"] = data["desmos-preset"] ?? this["desmos-preset"];

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


/** All of the user's locally stored questions data and site-wide preferences. */
export const userprefs = persisted("integrity.prefs", new UserPrefs(), {
  serializer: new UserPrefsSerializer(),
  syncTabs: true,
});
