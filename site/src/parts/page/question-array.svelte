<!-- @component QuestionArray

Displays a list of question cards.
-->

<script lang="ts">

import Site from "#scripts/site";

import QuestionCard from "#parts/ui/card.question.svelte";


interface Props {
  shards: string[];
}

let { shards }: Props = $props();

</script>


<ul>
  {#each shards as shard}
    {@const question = Site.questions.integrals.questions[shard]}

    <QuestionCard {question}
      latex={question.question.content}
      style="row"
    />
  {/each}
</ul>


<style lang="scss">

ul {
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;
}

</style>
