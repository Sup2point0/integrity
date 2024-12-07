<script lang="ts">

import Site from "#scripts/site";
import { search } from "#scripts/stores";
import { filter_questions } from "#scripts/search";

import QuestionCard from "#parts/ui/card.question.svelte";

import Header from "#parts/core/header.svelte";
import Search from "#parts/ui/search.svelte";

import { onMount } from "svelte";


const tags = Site.questions["complete-square"].tags;

let filtered = $derived(filter_questions(
  Site.get_questions("complete-square"),
  search
));


onMount(() => {
  let data = {};
  for (let tag of tags) {
    console.log("setting tag =", tag)
    data[tag] = false;
  }
  search.tags = data;
  console.log(search);
})

</script>


<svelte:head>
  <title> Completing the Square · Integrity </title>
</svelte:head>


<Header title="Completing the Square" />

<Search {tags} />

<div class="content">
  {#each filtered as q}
    <QuestionCard
      title={q.title}
      intern="complete-the-square/question?shard={q.shard}"
      latex={q.question.content}
      date={q.date}
      tags={q.tags}
    />
  {/each}

  {#if filtered.length === 0}
    <p> Oops, no questions found! </p>
  {/if}
</div>


<style lang="scss">

.content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}

p {
  color: $col-text-deut;
}

</style>
