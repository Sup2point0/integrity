<script lang="ts">

import Site from "#scripts/site";

import Header       from "#parts/core/header.svelte";
import Meta         from "#parts/page/meta.svelte";
import Breadcrumbs  from "#parts/page/breadcrumbs.svelte";
import ArticleArray from "#parts/page/article-array.svelte";

</script>


<Meta title="Graph Drawing · Scriptures" />


<Breadcrumbs levels={[
  { text: "Scriptures", intern: "scriptures" },
  { text: "Graph Drawing" }
]} />

<Header title="Graph Drawing" />


<section>
  <ArticleArray paths={Site.index.general.pages.filter(path => Site.index["graph-drawing"].pages.includes(path))} />
</section>

<section>
  <h2 id="dynamic-scriptures"> Dynamic Scriptures </h2>

  <!-- TODO -->
  <ArticleArray pages={[
    { dest: "scriptures/graph-drawing/dyna/multiplication", head: "Multiplication as Scaling" },
  ]} />
</section>

<section>
  <h2> Collections </h2>
  <ArticleArray paths={Site.index.collections.pages.filter(path => Site.index["graph-drawing"].pages.includes(path))} />
</section>


<style lang="scss">

section {
  margin: 0 0 4rem;
  text-align: center;
}

h2 {
  margin: 1em 0;
  padding: 0 0.1em 0.25em;
  @include font-serif;
  font-weight: 400;
  font-size: 200%;
}

</style>
