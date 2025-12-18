<script>

import Meta from "#parts/page/meta.svelte";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";
import ArticleArray from "#parts/page/article-array.svelte";

import { page } from "$app/state";


const { content, metadata: data } = page.data;

</script>


<Meta title={data.title} desc={data.desc} />


<Breadcrumbs levels={[
  { text: "Scriptures", intern: "scriptures" },
  { text: "Graph Drawing", intern: "scriptures/graph-drawing" },
  { text: data.title },
]} />

<Header page={data} />

<article>
  {@render content()}

  <!-- TODO continue reading -->
</article>
