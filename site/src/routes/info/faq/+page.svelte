<script>

import Content from "./content.svx";

import Header from "#parts/core/header.svelte";
import Meta from "#parts/meta.svelte";

</script>


<Meta title="FAQ"
  desc="Frequently asked questions about Integrity"
/>


<Header title="FAQ"
  desc="Fervently Anticipated Questions"
/>

<article>
  <Content />
</article>


<style lang="scss">

:global(article h3) {
  width: 100%;
  margin-top: 1.5em;
  @include font-serif;
  color: $col-deut;
}

</style>
