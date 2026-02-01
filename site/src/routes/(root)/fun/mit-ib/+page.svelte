<script lang="ts">

import Header         from "#parts/core/header.svelte";
import Breadcrumbs    from "#parts/page/breadcrumbs.svelte";
import Meta           from "#parts/page/meta.svelte";
import Card           from "#parts/ui/card.svelte";
import CardsContainer from "#parts/ui/container.cards.svelte";

</script>


<Meta title="MIT Integration Bee"
  desc="Fun questions from the MIT Integration Bee rounds"
/>


<Breadcrumbs levels={[
  { text: "Fun", intern: "fun" },
  { text: "MIT Integration Bee"}
]} />

<Header title="MIT Integration Bee" capt="Fun questions from the MIT Integration Bee rounds" />


<CardsContainer>
  <Card title="2023" intern="fun/mit-ib/2023" />
</CardsContainer>
