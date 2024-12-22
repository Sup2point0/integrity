<script>

import Content from "./content.svx";
import { metadata as page } from "./content.svx";

import Meta from "#parts/page/meta.svelte";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";

</script>


<Meta title="Shards · Docs"
  desc="Explaining the question identifier codes used throughout Integrity"
/>


<Breadcrumbs levels={[
  { text: "Docs", intern: "docs" },
  { text: "Shards" },
]} />

<Header title={page.title} capt={page.capt} />

<article>
  <Content />
</article>
