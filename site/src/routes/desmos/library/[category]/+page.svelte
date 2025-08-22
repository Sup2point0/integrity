<script lang="ts">

import Site from "#src/scripts/site";

import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";
import Meta from "#parts/page/meta.svelte";
import ArticleArray from "#parts/page/article-array.svelte";

import { page } from "$app/state";


let data = $derived(page.data);

</script>


<Meta title={data.category} />


<Breadcrumbs levels={[
  { text: "Desmos", intern: "desmos" },
  { text: "Library", intern: "desmos/library" },
  { text: data.category },
]} />

<Header title={data.category} capt="Desmos Library" />


<ArticleArray
  paths={Site.index[data.category.toLowerCase()].pages.filter(path => (
    Site.index.library.pages.includes(path)
  ))}
/>
