import { dyna_scriptures } from "#scripts/site";

import { error } from "@sveltejs/kit";


export function load({ params })
{
	// MIGRATE FIXME add graph-drawing topics
	let page = dyna_scriptures["graph-drawing"]["graph-drawing"][params.page];
	if (page == undefined) error(404);

	return { ...page, wide: true };
}
