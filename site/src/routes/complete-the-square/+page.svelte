<script lang="ts">

import Site from "#scripts/site";

import QuestionCard from "#parts/ui/card.question.svelte";

import Header from "#parts/core/header.svelte";

</script>


<Header> Completing the Square </Header>

<div class="content">
  {#each Site.get_questions("complete-square") as q}
    <QuestionCard
      title={q.title}
      intern="complete-the-square/{q.shard}"
      latex={q.question.content}
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
