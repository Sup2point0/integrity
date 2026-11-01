import { defineConfig, type DummyRuleMap } from "oxlint";


export default defineConfig(
{
	ignorePatterns: [
		"*.test.*",
		"*.config.*",
	],
	plugins: ["typescript"],
	categories: {
		nursery: "error",
		correctness: "error",
		suspicious: "warn",
		perf: "warn",
	},
	options: {
		typeAware: true,
	},
	env: {
		builtin: true,
		node: true,
	},
	rules: set_rules({
		"array-callback-return": true,
		"block-scoped-var": false,
		"default-case-last": true,
		"no-array-constructor": true,
		"no-case-declarations": false,
		"no-empty": true,
		"no-fallthrough": true,
		"no-implicit-coercion": true,
		"no-lonely-if": true,
		"no-prototype-builtins": true,
		"no-redeclare": true,
		"no-regex-spaces": false,
		"no-return-assign": true,
		"no-self-assign": false,
		"no-sequences": true,
		"no-shadow": false,
		"no-undef": false,
		"no-underscore-dangle": false,
		"no-unexpected-multiline": "warn",
		"no-unmodified-loop-condition": true,
		"no-unneeded-ternary": true,
		"no-unreachable-loop": true,
		"no-unused-expressions": false,
		"no-unused-labels": false,
		"no-unused-vars": ["error", { argsIgnorePattern: "(^_|^params$)", varsIgnorePattern: "^_" }],
		"no-useless-assignment": true,
		"no-var": false,
		"object-shorthand": "warn",
		"prefer-const": false,

		"typescript/ban-ts-comment": true,
		"typescript/explicit-module-boundary-types": false,
		"typescript/no-confusing-void-expression": true,
		"typescript/no-empty-object-type": true,
		"typescript/no-explicit-any": false,
		"typescript/no-extraneous-class": false,
		"typescript/no-floating-promises": true,
		"typescript/no-import-type-side-effects": true,
		"typescript/no-mixed-enums": true,
		"typescript/no-namespace": false,
		"typescript/no-require-imports": true,
		"typescript/no-unnecessary-boolean-literal-compare": false,
		"typescript/no-unnecessary-condition": true,
		"typescript/no-unnecessary-type-assertion": true,
		"typescript/no-unsafe-call": true,
		"typescript/no-unsafe-function-type": true,
		"typescript/no-unsafe-return": true,
		"typescript/no-unsafe-type-assertion": false,
		"typescript/prefer-nullish-coalescing": true,
		"typescript/restrict-template-expressions": false,
		"typescript/strict-boolean-expressions": true,
		"typescript/switch-exhaustiveness-check": true,
	}),
});


function set_rules(
	rules: {
		[K in keyof DummyRuleMap]?: boolean | DummyRuleMap[K];
	}
): DummyRuleMap
{
	for (let [key, value] of Object.entries(rules)) {
		switch (value) {
			case true:  rules[key] = "error"; break;
			case false: rules[key] = "off";   break;
		}
	}
	
	return rules as DummyRuleMap;
}
