<script lang="ts">

import { Meta, Breadcrumbs, Header } from "#parts/core";
import { Card, CardsContainer } from "#parts/ui";

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
