<script lang="ts">

import Site from "#src/scripts/site";

import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";
import Meta from "#parts/page/meta.svelte";
import ArticleArray from "#parts/page/article-array.svelte";

</script>


<Meta title="Docs"
  desc="Documentation on all things Desmos"
/>


<Breadcrumbs levels={[
  { text: "Integrity", link: Site.root },
  { text: "Desmos", intern: "desmos" },
  { text: "Docs" },
]} />

<Header title="Docs" />


<ArticleArray
  paths={Site.index.docs.pages.filter(path => (
    Site.index.desmos.pages.includes(path)
  ))}
/>
