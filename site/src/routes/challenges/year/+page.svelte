<script lang="ts">

import Card from "#parts/ui/card.svelte";

import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";
import Meta from "#parts/page/meta.svelte";

</script>


<Meta title="0–100 Year Challenge" desc="Making the numbers from 0 to 100 with the digits of the year, in order" />


<Breadcrumbs levels={[
  { text: "Challenges", intern: "challenges" },
  { text: "0–100 Year Challenge"}
]} />

<Header title="0–100 Year Challenge" capt="Making the numbers from 0 to 100 with the digits of the year, in order" />


<div class="content">
  <Card title="2024" intern="challenges/year/2024" />
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
