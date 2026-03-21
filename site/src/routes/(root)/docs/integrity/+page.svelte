<script lang="ts">

import Site from "#src/scripts/site";

import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";
import Meta from "#parts/page/meta.svelte";
import ArticleArray from "#parts/page/article-array.svelte";
import ArticleCard from "#parts/ui/card.article.svelte";

</script>


<Meta title="Integrating Integrity"
  desc="Uncovering the derivation of Integrity"
/>


<Breadcrumbs levels={[
  { text: "Integrity", link: Site.root },
  { text: "Docs", link: "docs" },
  { text: "Integrating Integrity" },
]} />

<Header title="Integrating *Integrity*" capt="Uncovering the derivation of Integrity" />


<ArticleArray paths={Site.index["integrating-integrity"].pages} />
