/**
 * Exposes the `userprefs` object and associated `UserPrefs` class for storing user preferences and data. This is synced with `localStorage`.
 */

import { persisted, type Serializer } from "svelte-persisted-store";


export class UserPrefs
{
  /** Shards of questions marked as solved. */
  solved: string[] = $state([]);

  /** shards of flagged questions. */
  flagged: Set<string> = $state(new Set());

  /** Shards of starred questions. */
  starred: string[] = $state([]);

  /** Search view preference. */
  "search-view": "grid" | "list" = $state("grid");

  /** Preset of the Workspace Desmos window. */
  "desmos-preset": "integrals" | "complete-square" | null = $state("integrals");

  /** Load attributes from `localStorage` JSON. */
  set_from_json(data: object): UserPrefs
  {
    // TODO surely we can come up with a better way...
    this.solved = data.solved ?? this.solved;
    this.flagged = new Set(data.flagged ?? this.flagged);
    this.starred = data.starred ?? this.starred;
    this["search-view"] = data["search-view"] ?? this["search-view"];
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

  /** Expose `UserPrefs` attributes for syncing to localStorage. */
  stringify(data: UserPrefs): string
  {
    return JSON.stringify({
      solved: data.solved,
      flagged: Array.from(data.flagged),
      starred: data.starred,
      "search-view": data["search-view"],
      "desmos-preset": data["desmos-preset"],
    });
  }
}


/** User data and preferences. */
export const userprefs = persisted("integrity.prefs", new UserPrefs(), {
  serializer: new UserPrefsSerializer(),
  syncTabs: true,
});
