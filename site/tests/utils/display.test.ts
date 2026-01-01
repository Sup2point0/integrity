import { test, expect } from "@playwright/test";

import * as utils from "#scripts/utils";


test("capitalise", () => {
  expect(utils.capitalise("lowercase")).toBe("Lowercase");
  expect(utils.capitalise("UPPERCASE")).toBe("UPPERCASE");
  expect(utils.capitalise("camelCase")).toBe("CamelCase");
  expect(utils.capitalise("snake_case")).toBe("Snake_case");
});

test("round", () => {
  expect(utils.round(0.1234   )).toBe("0");
  expect(utils.round(0.1234, 0)).toBe("0");
  expect(utils.round(0.1234, 1)).toBe("0.1");
  expect(utils.round(0.1234, 2)).toBe("0.12");
  expect(utils.round(0.1234, 3)).toBe("0.123");
  expect(utils.round(0.1234, 4)).toBe("0.1234");
  expect(utils.round(0.1234, 5)).toBe("0.12340");
});
