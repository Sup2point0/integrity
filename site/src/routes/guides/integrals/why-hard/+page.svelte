<script>

import Content from "./content.svx";
import { metadata as page } from "./content.svx";

import Meta from "#parts/page/meta.svelte";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";

</script>


<Meta title={page.title} desc={page.desc} />


<Breadcrumbs levels={[
  { text: "Guides", intern: "guides" },
  { text: "Integration", intern: "guides/integrals" },
  { text: "Why Is Integration Difficult?" },
]} />

<Header title="Why Is Integration Difficult?" capt="You can learn to differente in a day, but you can’t learn to integrate in a lifetime." />

<article>
  <Content />
</article>
