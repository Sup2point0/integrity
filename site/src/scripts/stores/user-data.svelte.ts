/**
 * Exposes the `userdata` object and associated `UserData` class for storing user data and preferences. This is synced with localStorage.
 */

export class UserData
{
  /** Shards of questions marked as solved. */
  solved: string[] = [];

  /** shards of flagged questions. */
  flagged: string[] = [];

  /** Shards of starred questions. */
  starred: string[] = [];

  /** Search view preference. */
  "search-view": "grid" | "list" = "grid";

  /** Preset of the Workspace Desmos window. */
  "desmos-mode": "int" | "c-square" | null = $state(null);
}

/** User data and preferences. */
export const userdata = new UserData();
