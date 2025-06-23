<!-- @component QuestionArray

Displays a list of question cards.
-->

<script lang="ts">

import Site from "#scripts/site";

import type { Question } from "#src/scripts/types";

import QuestionCard from "#parts/ui/card.question.svelte";


interface Props {
  shards?: string[];
  questions?: Question[];
}

let { shards, questions }: Props = $props();

</script>


<ul>
  {#if questions}
    {#each questions as question}
      <QuestionCard {question}
        latex={question.question.content}
        style="row"
      />
    {/each}
  
  {:else if shards}
    {#each shards as shard}
      {@const question = Site.questions.integrals.questions[shard]}

      <QuestionCard {question}
        latex={question.question.content}
        style="row"
      />
    {/each}

  {:else}
  
  {/if}
</ul>


<style lang="scss">

ul {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 1rem;
}

</style>
