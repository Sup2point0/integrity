<script>

import Content from "./~content.svx";
import { metadata as page } from "./~content.svx";

import Meta from "#parts/page/meta.svelte";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";

</script>


<Meta title={page.title} desc={page.desc} />


<Breadcrumbs levels={[
  { text: "Challenges", intern: "challenges" },
  { text: "MIT Integration Bee", intern: "fun/mit-ib" },
  { text: "2023" },
]} />

<Header {page} />

<article>
  <Content />
</article>
