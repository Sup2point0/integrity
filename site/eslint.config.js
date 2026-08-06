import path from "node:path";

import css from "@eslint/css";
import js from "@eslint/js";
import svelte from "eslint-plugin-svelte";
import { defineConfig, includeIgnoreFile } from "eslint/config";
import globals from "globals";
import ts from "typescript-eslint";


export default defineConfig(
  includeIgnoreFile(path.resolve(".gitignore")),

  // TypeScript
  {
    extends: [
      js.configs.recommended,
      ts.configs.recommended,
    ],
    files: ["**/*.{js,ts}"],
    plugins: { js },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      "no-implicit-coercion": "error",
      "no-regex-spaces": "off",
      "no-undef": "off",
      "no-unmodified-loop-condition": "error",
      "no-unreachable-loop": "error",
      "object-shorthand": "warn",
      "prefer-const": "off",
      "@typescript-eslint/no-confusing-void-expression": "error",
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-unnecessary-condition": "error",
      "@typescript-eslint/no-unnecessary-type-assertion": "error",
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/prefer-nullish-coalescing": "error",
      "@typescript-eslint/strict-boolean-expressions": "error",
      "@typescript-eslint/switch-exhaustiveness-check": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "(^_|^params$)", varsIgnorePattern: "^_" }
      ],
    },
  },

  // Svelte
  {
    extends: [svelte.configs.recommended],
    files: ["**/*.svelte", "**/*.svelte.{js,ts}"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        extraFileExtensions: [".svelte"],
        parser: ts.parser,
      },
    },
    rules: {
      "no-undef": "off",
      "svelte/no-at-html-tags": "off",
      "svelte/no-navigation-without-resolve": "off",
      "svelte/require-each-key": "off",
    },
  },

  // CSS
  {
    extends: ["css/recommended"],
    files: ["**/*.css"],
    language: "css/css",
    plugins: { css },
  },
);
