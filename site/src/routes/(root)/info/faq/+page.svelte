<script>

import PageContent from "#parts/base/static-page.svelte";

</script>


<PageContent levels={[
  { text: "Info", intern: "info" }
]} id="faq" />


<style lang="scss">

:global(article#faq h3) {
  margin-top: 1.5em;
  color: $col-deut;
}

</style>
