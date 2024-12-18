<script>

import Content from "./content.svx";

import Header from "#parts/core/header.svelte";
import Meta from "#parts/page/meta.svelte";

</script>


<Meta title="FAQ"
  desc="Frequently asked questions about Integrity"
/>


<Header title="FAQ"
  desc="Fervently Anticipated Questions"
/>

<article id="faq">
  <Content />
</article>


<style lang="scss">

article#faq :global(h3) {
  margin-top: 1.5em;
  color: $col-deut;
}

</style>
