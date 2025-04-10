/// code by pngwn
/// source - https://github.com/pngwn/mdsvex-math/blob/main/mdsvex.config.js

import katex from "katex";
import { visit } from "unist-util-visit";


export function correct_hast_tree()
{
	return (tree) => visit(tree, 'text', (node) => {
		if (node.value.trim().startsWith('<')) {
			node.type = 'raw';
		}
	});
};

export function render_katex_blocks()
{
	return (tree) => visit(tree, 'code', (node) => {
		if (node.lang === 'math') {
			const str = katex.renderToString(node.value, {
				displayMode: true,
				leqno: false,
				fleqn: false,
				throwOnError: true,
				errorColor: '#cc0000',
				strict: 'warn',
				output: 'htmlAndMathml',
				trust: false,
				macros: { '\\f': '#1f(#2)' }
			});

			node.type = 'raw';
			node.value = '{@html `' + str + '`}';
		}
	});
};
