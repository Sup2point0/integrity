<script lang="ts">

import Header         from "#parts/core/header.svelte";
import Meta           from "#parts/page/meta.svelte";
import Breadcrumbs    from "#parts/page/breadcrumbs.svelte";
import Card           from "#parts/ui/card.svelte";
import CardsContainer from "#parts/ui/container.cards.svelte";

</script>


<Meta title="UNSW Integration Bee" desc="Fun questions from the UNSW Maths Society Integration Bee" />


<Breadcrumbs levels={[
  { text: "Fun", intern: "fun" },
  { text: "UNSW Integration Bee"}
]} />

<Header title="UNSW Integration Bee" capt="Fun questions from the UNSW Maths Society Integration Bee" />


<CardsContainer>
  <Card title="2022" intern="fun/unsw-ib/2022" />
</CardsContainer>

