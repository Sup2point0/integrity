<script lang="ts">

import Site from "#scripts/site";

import QuestionCard from "#parts/ui/card.question.svelte";

import Header from "#parts/core/header.svelte";

</script>


<Header> Completing the Square </Header>

<div class="content">
  {#each Object.values(Site.questions["complete-square"].questions) as question}
    <QuestionCard
      title={question.title}
      latex={question.question.content}
      date={question.date}
      tags={question.tags}
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
