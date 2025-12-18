<script>

import Content from "./~content.svx";
import { metadata as page } from "./~content.svx";

import Meta from "#parts/page/meta.svelte";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";

</script>


<Meta title={page.title} desc={page.desc} />


<Breadcrumbs levels={[
  { text: "Scriptures", intern: "scriptures" },
  { text: "Completing the Square", intern: "scriptures/complete-square" },
  { text: "Why Complete the Square?" }
]} />

<Header title={page.title} capt={page.capt} />

<article>
  <Content />
</article>
