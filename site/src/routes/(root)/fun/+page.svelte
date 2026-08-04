<script lang="ts">


import Site from "#scripts/site";

import { Meta, Breadcrumbs, Header } from "#parts/core";
import { Card, CardsContainer } from "#parts/ui";

</script>


<Meta title="Fun"
  desc="General mathematical fun"
/>


<Breadcrumbs levels={[
  { text: "Integrity", link: Site.root },
  { text: "Fun" },
]} />

<Header title="Fun"
  capt="General mathematical fun"
/>


<CardsContainer>
  <Card title="MIT Integration Bee"
    intern="fun/mit-ib"
    latex={String.raw `\int \frac {\sin{x}}{2e^x + \sin{x} + \cos{x}} \ dx`}
  />
  <Card title="UNSW Integration Bee"
    intern="fun/unsw-ib"
    latex={String.raw `\int_{0}^{\infin} \frac{1}{\left( x+1/x \right)^2} \ dx`}
  />
  <Card title="0–100 Year Challenge"
    intern="fun/year"
    latex={String.raw `2^{(0!+2)! + 5}`}
  />
  <Card title="Maths on YouTube"
    intern="fun/youtube"
    pict="yt/3b1b.png"
  />
</CardsContainer>
