<script lang="ts">

import Card from "#parts/ui/card.svelte";

import Header from "#parts/core/header.svelte";

</script>


<svelte:head>
  <title> Integrity · Sup#2.0 </title>
  <meta name="description" content="All my hand-crafted maths questions!" />
</svelte:head>


<div class="content">
  <Header title="What fun are we having today?" />

  <section class="browse">
    <Card title="Integrals"
      intern="questions/integrals"
      latex={"\\int f(x) \\, dx"}
    />
    <Card title="Graph Drawing"
      intern="questions/graph-drawing"
      pict="previews/graph-drawing.png"
    />
    <Card title="Completing the Square"
      intern="questions/complete-the-square"
      latex={"a(x - p)^2 + q"}
    />
    <Card title="Addvent"
      intern="questions/addvent"
      pict="previews/addvent-text.png"
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
