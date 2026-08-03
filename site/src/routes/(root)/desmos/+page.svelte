<script lang="ts">

import Site from "#scripts/site";

import { Card, CardsContainer } from "#parts/ui";
import { Meta, Breadcrumbs, Header } from "#parts/core";

</script>


<Meta title="Desmos"
  desc="All things Desmos"
/>


<Breadcrumbs levels={[
  { text: "Integrity", link: Site.root },
  { text: "Desmos" }
]} />

<Header title="Desmos"
  capt="All things Desmos"
/>


<CardsContainer>
  <Card title="Docs"
    intern="desmos/docs"
    latex={String.raw`I_\text{desmos} \ : \ I()`}
  />
  <Card title="Library"
    intern="desmos/library"
    latex={String.raw`f_\text{library}()`}
  />
  <Card title="Game Development"
    intern="desmos/gamedev"
    latex={String.raw`g_{state} \to 1 - g_{state}`}
  />
  <!-- <Card title="Gradient Descent"
    intern="desmos/grad-desc"
    latex={String.raw`\frac{\partial}{\partial x} \ L(x)`}
  /> -->
</CardsContainer>
