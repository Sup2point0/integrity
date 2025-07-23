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
  { text: "UNSW Integration Bee", intern: "fun/unsw-ib" },
  { text: "2022" },
]} />

<Header {page} />

<article>
  <Content />
</article>
