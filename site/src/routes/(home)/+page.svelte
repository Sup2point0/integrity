<script lang="ts">

import Site from "#scripts/site";

import Card from "#parts/ui/card.svelte";
import QuestionCard from "#parts/ui/card.question.svelte";

import Header from "#parts/core/header.svelte";


const featured = Site.get_featured();

</script>


<svelte:head>
  <title> Integrity · Sup#2.0 </title>
  <meta name="description" content="All my hand-crafted maths questions!" />
</svelte:head>


<div class="content">
  <section class="browse">
    <Header title="What fun are we having today?" />

    <Card title="Integrals"
      intern="questions/integrals"
      latex={"\\int f(x) \\, dx"}
    />
    <Card title="Graph Drawing"
      intern="questions/graph-drawing"
      pict="previews/graph-drawing.png"
    />
    <Card title="Completing the Square"
      intern="questions/complete-square"
      latex={"a(x - p)^2 + q"}
    />
    <Card title="Addvent"
      intern="questions/addvent"
      pict="previews/addvent-text.png"
    />
  </section>

  <section class="featured">
    <Header title="Featured" />
    
    <div class="questions">
      {#each featured as q}
        <QuestionCard
          title={q.title}
          intern="question/{q.topic}?shard={q.shard}"
          date={q.date}
        />
      {/each}
    </div>
  </section>
</div>


<style lang="scss">

.content {
  text-align: center;
}

section {
  margin: 0 0 4rem;
  
  &.browse {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
  }
}

.featured .questions {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}

</style>
