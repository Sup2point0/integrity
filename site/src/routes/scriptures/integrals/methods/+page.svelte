<script lang="ts">

import Site from "#src/scripts/site";

import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";
import Meta from "#parts/page/meta.svelte";
import ArticleArray from "#parts/page/article-array.svelte";

</script>


<Meta title="Methods"
  desc="Methods of Integration"
/>


<Breadcrumbs levels={[
  { text: "Scriptures", intern: "scriptures" },
  { text: "Integration", intern: "scriptures/integrals" },
  { text: "Methods" },
]} />

<Header title="Methods"
  capt="Methods of Integration"
/>


<ArticleArray
  paths={Site.index.methods.pages.filter(path => (
    Site.index.integrals.pages.includes(path)
  ))}
/>
