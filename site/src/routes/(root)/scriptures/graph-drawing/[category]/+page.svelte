<script>

import Site from "#scripts/site";
import { capitalise } from "#scripts/utils";

import { Breadcrumbs, Header, Meta } from "#parts/core";
import { ArticleArray, Line } from "#parts/page";

import { page } from "$app/state";


let { content, metadata: data } = $derived(page.data);

</script>


<Meta title={data.title} desc={data.desc} />


<Breadcrumbs levels={[
	{ text: "Scriptures", intern: "scriptures" },
	{ text: "Graph Drawing", intern: "scriptures/graph-drawing" },
	{ text: capitalise(data.title) }
]} />

<Header page={data} />


<article>
	{@render content?.()}
</article>

<Line />

<ArticleArray paths={(Site.tags[data.category] ?? []).filter(
	path => Site.tags["graph-drawing"].includes(path)
)} />
