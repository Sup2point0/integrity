<script>

import Site from "#src/scripts/site";

import Content from "../../../../../docs/shard.md";

import Meta from "#parts/page/meta.svelte";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";

</script>


<Meta title="Shards · Docs"
  desc="Explaining the question identifier codes used throughout Integrity"
/>


<Breadcrumbs levels={[
  { text: "Integrity", link: Site.root },
  { text: "Docs", intern: "docs" },
  { text: "Shards" },
]} />

<Header title="Shards"
  desc="Question Codes"
/>

<article>
  <Content />
</article>
