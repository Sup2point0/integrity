<script lang="ts">

import Site from "#scripts/site";

import Clicky from "#parts/ui/clicky.svelte";
import Card from "#parts/ui/card.svelte";
import Link from "#parts/ui/link.svelte";

import Header from "#parts/core/header.svelte";

</script>


<div class="content">
  <Header title="What fun are we having today?"> What fun are we having today? </Header>

  <section class="browse">
    <Card title="Integrals"
      intern="integrals"
      latex={"\\int f(x) \\, dx"}
    />
    <Card title="Graph Drawing"
      intern="graphs"
      latex={"f(x) = \\ln{x}"}
    />
    <Card title="Completing the Square"
      intern="complete-the-square"
      latex={"a(x - p)^2 + q"}
    />
  </section>
</div>


<style lang="scss">

.content {
  text-align: center;
}

section.browse {
  margin: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}

</style>
