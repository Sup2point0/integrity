<script lang="ts">

import Site from "#scripts/site";
import { capitalise } from "#scripts/utils";
import type { Page } from "#scripts/types";

import { Breadcrumbs, Header } from "#parts/core";
import { ArticleArray, Line } from "#parts/page";

import { page } from "$app/state";


let { children } = $props();
</script>


<Breadcrumbs levels={[
	{ text: "Scriptures", intern: "scriptures" },
	{ text: "Graph Drawing", intern: "scriptures/graph-drawing" },
	{ text: capitalise(page.data.title) }
]} />

<Header page={page.data as Page} />


<article>
	{@render children?.()}
</article>

<Line />

<ArticleArray paths={(Site.tags[page.data.heading.toLowerCase()] ?? []).filter(
	path => Site.tags["graph-drawing"].includes(path)
)} />
