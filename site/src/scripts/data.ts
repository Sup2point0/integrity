/**
 * Handles loading integrals data.
 */

import { Integral } from "#scripts/types";


const raw_data = (await import("../data/integrals.json")).default;
export const data = process_data(raw_data);


function process_data(data: object[]): Integral[]
{
  let out: Integral[] = [];

  for (let question of data) {
    out.push(new Integral(question));
  }

  return out;
}
