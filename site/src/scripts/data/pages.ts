import type { Page } from "#scripts/types";


import site_data from "#src/data/site.json" with { type: "json" };
export const pages = site_data.pages;
export const tags = site_data.tags;
export const scriptures = find_scriptures(pages);


interface SiteScriptures
{
	[topic: string]: Page[];
}


function find_scriptures(raw: object): SiteScriptures
{
	// MIGRATE: Maybe increase nesting?
	let out: SiteScriptures = {};

	for (let p of Object.values(raw)) {
		let page = p as Page;

		if (page.tags?.includes("scriptures")) {
			let topic = page.tags[1];

			out[topic] ??= [];
			out[topic].push(page);
		}
	}
	
	return out;
}

