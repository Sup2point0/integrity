<script>

import Content from "./~content.svx";
import { metadata as page } from "./~content.svx";

import Meta from "#parts/page/meta.svelte";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";

</script>


<Meta title={page.title} desc={page.desc} />


<Breadcrumbs levels={[
  { text: "Docs", intern: "docs" },
  { text: "Fun Facts" },
]} />

<Header title={page.head} capt={page.capt} />

<article>
  <Content />
</article>


<style lang="scss">

:global(a:has(.highlight), a:has(.highlight):is(:hover, :focus-visible, :active)) {
  color: inherit;
}

:global(a:has(.highlight)::after) {
  display: none;
}

</style>
