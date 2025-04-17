<script lang="ts">

import Site from "#scripts/site";

import Content from "./integrals.svx";

import Meta from "#parts/page/meta.svelte";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";
import ArticleArray from "#parts/page/article-array.svelte";

</script>


<Meta title="Integration · Guides" />


<Breadcrumbs levels={[
  { text: "Guides", intern: "guides" },
  { text: "Integration" }
]} />

<Header title="Integration" />


<article>
  <Content />
</article>

<div class="browse">
  <ArticleArray paths={Site.guides["integrals"].map(page => page.path)} />
</div>


<style lang="scss">

.browse {
  margin: 5rem 1rem 1rem;
}

</style>
