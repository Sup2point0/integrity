<script lang="ts">

import Site from "#scripts/site";

import { Meta, Breadcrumbs, Header } from "#parts/core";
import Line from "#parts/page/line.svelte";
import ArticleArray from "#parts/page/article-array.svelte";

</script>


<Meta title="General · Scriptures" />


<Breadcrumbs levels={[
  { text: "Scriptures", intern: "scriptures" },
  { text: "General" }
]} />

<Header title="Scriptures" />


<section>
  <ArticleArray paths={Site.index.general.pages.filter(
    path => !Site.index.integrals.pages.includes(path)
  )} />
</section>
