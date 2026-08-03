<script lang="ts">

import Content from "./~content.svx";

import { Card } from "#parts/ui";
import { CardsContainer } from "#parts/ui";

import { Meta, Breadcrumbs, Header } from "#parts/core";
import Line from "#parts/page/line.svelte";

</script>


<Meta title="Integration · Scriptures" />


<Breadcrumbs levels={[
  { text: "Scriptures", intern: "scriptures" },
  { text: "Integration" }
]} />

<Header title="Integration" />


<article>
  <Content />
</article>

<Line />

<CardsContainer>
  <Card title="General"
    intern="scriptures/integrals/general"
    latex={String.raw`\int f(x) \ dx`}
  />
  <Card title="Antiderivatives"
    intern="scriptures/integrals/antiderivatives"
    latex={String.raw`\int \sec^2{x} \ dx = \tan{x} - c`}
  />
  <Card title="Methods"
    intern="scriptures/integrals/methods"
    latex={String.raw`\int f g' \ dx = fg - \int f' g \ dx`}
  />
  <!-- <Card title="Strategies
      intern="scriptures/integrals/strategies" /> 
      latex={String.raw``}
  >/ -->
  <Card title="Collections"
    intern="scriptures/integrals/collections"
    latex={String.raw`\int g(x) \ dx \quad \int h(x) \ dx`}
  />
  <Card title="Adventures"
    intern="scriptures/integrals/adventures"
    latex={String.raw`\int w(\zeta) \ d\zeta`}
  />
</CardsContainer>
