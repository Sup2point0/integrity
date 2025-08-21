<script lang="ts">

import Site from "#src/scripts/site";

import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";
import Meta from "#parts/page/meta.svelte";
import ArticleArray from "#parts/page/article-array.svelte";

</script>


<Meta title="Rendering"
  desc="Desmos standard library functions for rendering visuals"
/>


<Breadcrumbs levels={[
  { text: "Desmos", intern: "desmos" },
  { text: "Library", intern: "desmos/library" },
  { text: "Rendering" },
]} />

<Header title="Rendering"
  capt="Standard Library"
/>


<ArticleArray
  paths={Site.index.library.pages.filter(path => (
    Site.index.functions.pages.includes(path)
  ))}
/>
