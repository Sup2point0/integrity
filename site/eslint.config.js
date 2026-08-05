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
      }
    },
    rules: {
      "no-undef": "off",
      "prefer-const": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }
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
