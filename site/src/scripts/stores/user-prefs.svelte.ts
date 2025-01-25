/**
 * Exposes the `userprefs` object and associated `UserPrefs` class for storing user preferences and data. This is synced with `localStorage`.
 */

export class UserPrefs
{
  /** Flag for syncing data with `localStorage`. */
  _syncing: boolean = true;

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

  /** Expose attributes for syncing to localStorage. */
  toJSON()
  {
    return {
      solved: this.solved,
      flagged: Array.from(this.flagged),
      starred: this.starred,
      "search-view": this["search-view"],
      "desmos-preset": this["desmos-preset"],
    };
  }

  /** Load attributes from `localStorage` JSON. */
  set_from_json(data: object)
  {
    this._syncing = true;
    // TODO surely we can come up with a better way...
    this.solved = data.solved ?? this.solved;
    this.flagged = new Set(data.flagged ?? this.flagged);
    this.starred = data.starred ?? this.starred;
    this["search-view"] = data["search-view"] ?? this["search-view"];
    this["desmos-preset"] = data["desmos-preset"] ?? this["desmos-preset"];

    this._syncing = false;
  }
}

/** User data and preferences. */
export const userprefs = $state(new UserPrefs());
