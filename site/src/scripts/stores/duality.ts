import { writable } from "svelte/store";


export enum Duality {
  LIGHT, DARK
}

export const duality = writable<Duality>(Duality.LIGHT);
