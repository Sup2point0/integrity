<script lang="ts">

import Content from "./~content.svx";
import { metadata as page } from "./~content.svx";

import Card from "#parts/ui/card.svelte";

import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";
import Meta from "#parts/page/meta.svelte";

</script>


<Meta title={page.title} desc={page.desc} />


<Breadcrumbs levels={[
  { text: "Challenges", intern: "challenges" },
  { text: "0–100 Year Challenge"}
]} />

<Header {page} />


<div class="content">
  <Card title="2024" intern="challenges/year/2024" />
  <Card title="2025" intern="challenges/year/2025" />
</div>

<article>
  <Content />
</article>


<style lang="scss">

.content {
  padding-bottom: 2rem;
  margin: 1rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 1rem;
  text-align: center;
}

</style>
