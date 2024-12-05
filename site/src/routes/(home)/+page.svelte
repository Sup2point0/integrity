<script lang="ts">

import Site from "#scripts/site";

import Header from "#parts/core/header.svelte";
import Clicky from "#parts/ui/clicky.svelte";
import Card from "#parts/ui/card.svelte";

</script>


<div class="content">
  <Header> What fun are we having today? </Header>

  <div class="browse">
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
  </div>

  <!-- <Clicky text="testing" /> -->
</div>


<style lang="scss">

.content {
  text-align: center;
}

.browse {
  margin: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}

</style>
