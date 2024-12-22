<script>

import Content from "./content.svx";
import { metadata as page } from "./content.svx";

import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";

</script>


<Breadcrumbs levels={[
  { text: "Guides", intern: "guides" },
  { text: "Completing the Square", intern: "guides/complete-square" },
  { text: "Why Complete the Square?" }
]} />

<Header title={page.title} capt={page.capt} />

<article>
  <Content />
</article>
