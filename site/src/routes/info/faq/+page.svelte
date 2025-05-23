<script>

import Content from "./~content.svx";
import { metadata as page } from "./~content.svx";

import Meta from "#parts/page/meta.svelte";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";

</script>


<Meta title={page.title} desc={page.desc} />


<Breadcrumbs levels={[
  { text: "Info", intern: "info" },
  { text: "FAQ" },
]} />

<Header title={page.head} capt={page.capt} />

<article id="faq">
  <Content />
</article>


<style lang="scss">

article#faq :global(h3) {
  margin-top: 1.5em;
  color: $col-deut;
}

</style>
