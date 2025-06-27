<script lang="ts">

import Site from "#scripts/site";

import Meta from "#parts/page/meta.svelte";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";
import Line from "#parts/page/line.svelte";
import ArticleArray from "#parts/page/article-array.svelte";

</script>


<Meta title="General · Guides" />


<Breadcrumbs levels={[
  { text: "Guides", intern: "guides" },
  { text: "General" }
]} />

<Header title="Guides" />


<section>
  <ArticleArray paths={Site.index.general.pages} />
</section>
