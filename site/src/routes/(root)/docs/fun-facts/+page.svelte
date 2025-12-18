<script>

import PageContent from "#parts/base/static-page.svelte";

</script>


<PageContent levels={[
  { text: "Docs", intern: "docs" }
]} />


<style lang="scss">

:global(a:has(.highlight--), a:has(.highlight--):is(:hover, :focus-visible, :active)) {
  color: inherit;
}

:global(a:has(.highlight--)::after) {
  display: none;
}

</style>
