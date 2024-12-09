<script lang="ts">

import Site from "#scripts/site";
import { search } from "#scripts/stores";
import { filter_questions } from "#scripts/search";

import QuestionCard from "#parts/ui/card.question.svelte";

import Header from "#parts/core/header.svelte";
import Search from "#parts/ui/search.svelte";

import { onMount } from "svelte";


const tags = Site.questions["integrals"].tags;

let filtered = $derived(filter_questions(
  Site.get_questions("integrals"),
  search
));


onMount(() => {
  search.tags = Object.fromEntries(tags.map(tag => [tag, false]));
})

</script>


<svelte:head>
  <title> Integrals · Integrity </title>
</svelte:head>


<Header title="Integrals" />

<Search {tags} />

<div class="content">
  {#each filtered as q}
    <QuestionCard
      title={q.title}
      intern="question/integrals?shard={q.shard}"
      latex={q.question.content}
      date={search.show.dates ? q.date : undefined}
      tags={search.show.tags ? q.tags : undefined}
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
