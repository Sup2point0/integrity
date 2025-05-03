<script lang="ts">

import Card from "#parts/ui/card.svelte";

import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";
import Meta from "#parts/page/meta.svelte";

</script>


<Meta title="MIT Integration Bee"
  desc="Fun questions from the MIT Integration Bee rounds"
/>


<Breadcrumbs levels={[
  { text: "Challenges", intern: "challenges" },
  { text: "MIT Integration Bee"}
]} />

<Header title="MIT Integration Bee" capt="Fun questions from the MIT Integration Bee rounds" />


<div class="content">
  <Card title="2023" intern="challenges/mit-ib/2023" />
</div>


<style lang="scss">

.content {
  margin: 1rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 1rem;
  text-align: center;
}

</style>
