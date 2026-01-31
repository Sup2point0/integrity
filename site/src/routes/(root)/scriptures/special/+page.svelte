<script lang="ts">

import Site from "#scripts/site";

import Meta from "#parts/page/meta.svelte";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";
import ArticleArray from "#parts/page/article-array.svelte";

</script>


<Meta title="Special · Scriptures" />


<Breadcrumbs levels={[
  { text: "Scriptures", intern: "scriptures" },
  { text: "Special" }
]} />

<Header title="Scriptures" />


<section>
  <ArticleArray paths={Site.index.special.pages} />
</section>
