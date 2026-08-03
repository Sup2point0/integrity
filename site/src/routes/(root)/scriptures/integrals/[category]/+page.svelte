<script>

import Site from "#scripts/site";
import { capitalise } from "#scripts/utils";

import ArticleArray from "#parts/page/article-array.svelte";
import Line from "#parts/page/line.svelte";
import { Meta, Breadcrumbs, Header } from "#parts/core";

import { page } from "$app/state";


let { content, metadata: data } = $derived(page.data);

</script>


<Meta title={data.title} desc={data.desc} />


<Breadcrumbs levels={[
  { text: "Scriptures", intern: "scriptures" },
  { text: "Integration", intern: "scriptures/integrals" },
  { text: capitalise(data.title) }
]} />

<Header page={data} />


<article>
  {@render content?.()}
</article>

<Line />

<ArticleArray paths={(Site.index[data.category]?.pages ?? []).filter(
  path => Site.index.integrals.pages.includes(path)
)} />
