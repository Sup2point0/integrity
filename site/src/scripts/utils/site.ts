import { Topic } from "#scripts/types";

export { default } from "../stores/user-prefs.svelte.ts";


export function display_topic(topic: Topic | null | undefined): string
{
  switch (topic) {
    case Topic.INTEGRALS:       return "Integrals";
    case Topic.GRAPH_DRAWING:   return "Graph Drawing";
    case Topic.COMPLETE_SQUARE: return "Completing the Square";
    case Topic.GUESS_GRAPH:     return "Guess the Graph";
    case Topic.COOL_GRAPHS:     return "Cool Graphs";
    case Topic.ADDVENT:         return "Addvent";
    case Topic.SPECIAL:         return "Special";
    case Topic.DERIVATIVES:     return "Derivatives";
    default:                    return "Unknown Topic";
  }
}
