<script lang="ts">

import Site from "#scripts/site";

import QuestionCard from "#parts/ui/card.question.svelte";

import Header from "#parts/core/header.svelte";

</script>


<svelte:head>
  <title> Addvent · Integrity </title>
</svelte:head>


<Header title="Addvent"
  desc="Christmas-themed questions for 12 days of maths questions!"
/>

<div class="content">
  {#each Site.get_questions("addvent") as q}
    <QuestionCard
      title={q.title}
      intern="addvent/question?shard={q.shard}"
      date={q.date}
      tags={q.tags}
    />
  {/each}
</div>


<style lang="scss">

.content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}

</style>
