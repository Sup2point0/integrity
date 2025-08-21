<script lang="ts">

import Site from "#src/scripts/site";

import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";
import Meta from "#parts/page/meta.svelte";
import ArticleArray from "#parts/page/article-array.svelte";

</script>


<Meta title="Functions"
  desc="Desmos standard library functions"
/>


<Breadcrumbs levels={[
  { text: "Desmos", intern: "desmos" },
  { text: "Library", intern: "desmos/library" },
  { text: "Functions" },
]} />

<Header title="Functions"
  capt="Standard Library"
/>


<ArticleArray
  paths={Site.index.functions.pages.filter(path => (
    Site.index.library.pages.includes(path)
  ))}
/>
