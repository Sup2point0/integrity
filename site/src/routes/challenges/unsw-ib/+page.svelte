<script lang="ts">

import Card from "#parts/ui/card.svelte";

import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";
import Meta from "#parts/page/meta.svelte";

</script>


<Meta title="UNSW Integration Bee" desc="Fun questions from the UNSW Maths Society Integration Bee" />


<Breadcrumbs levels={[
  { text: "Challenges", intern: "challenges" },
  { text: "UNSW Integration Bee"}
]} />

<Header title="UNSW Integration Bee" capt="Fun questions from the UNSW Maths Society Integration Bee" />


<div class="content">
  <Card title="2022" intern="challenges/unsw-ib/2022" />
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
