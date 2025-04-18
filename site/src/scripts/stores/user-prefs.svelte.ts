/**
 * Exposes the `userprefs` object and associated `UserPrefs` class for storing user preferences and data. This is synced with `localStorage`.
 */

import { persisted, type Serializer } from "svelte-persisted-store";


export class UserPrefs
{
  /** Number of visits to the site. */
  visits: number = $state(0);

  /** Timestamp of last data export. */
  saved?: number = $state();

  /** Shards of questions whose pages have been visited before. */
  seen: Set<string> = $state(new Set());

  /** Shards of questions marked as solved. */
  solved: Set<string> = $state(new Set());

  /** shards of flagged questions. */
  flagged: Set<string> = $state(new Set());

  /** Shards of starred questions. */
  starred: Set<string> = $state(new Set());

  /** Search view preference. */
  "search-view": "grid" | "list" = $state("grid");

  /** Search sort preference. */
  "search-sort": "date" | "name" | "rel" | "rand" | null = $state(null);

  /** Whether search filters should be expanded. */
  "search-exp" = $state(true);

  /** Preset of the Workspace Desmos window. */
  "desmos-preset": "integrals" | "complete-square" | null = $state("integrals");

  /** Expose attributes for syncing to localStorage. */
  to_json(): object
  {
    return {
      visits: this.visits,
      saved: this.saved,
      seen: Array.from(this.seen),
      solved: Array.from(this.solved),
      flagged: Array.from(this.flagged),
      starred: Array.from(this.starred),
      "search-view": this["search-view"],
      "search-sort": this["search-sort"],
      "search-exp": this["search-exp"],
      "desmos-preset": this["desmos-preset"],
    }
  }

  /** Load attributes from `localStorage` JSON. */
  set_from_json(data: Partial<UserPrefs>): UserPrefs
  {
    // TODO surely we can come up with a better way...
    this.visits = data.visits ?? this.visits;
    this.saved = data.saved ?? this.saved;
    this.seen = new Set(data.seen ?? this.seen);
    this.solved = new Set(data.solved ?? this.solved);
    this.flagged = new Set(data.flagged ?? this.flagged);
    this.starred = new Set(data.starred ?? this.starred);
    this["search-view"] = data["search-view"] ?? this["search-view"];
    this["search-sort"] = data["search-sort"] ?? this["search-sort"];
    this["search-exp"] = data["search-exp"] ?? this["search-exp"];
    this["desmos-preset"] = data["desmos-preset"] ?? this["desmos-preset"];

    return this;
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
export const userprefs = persisted("integrity.prefs", new UserPrefs(), {
  serializer: new UserPrefsSerializer(),
  syncTabs: true,
});
