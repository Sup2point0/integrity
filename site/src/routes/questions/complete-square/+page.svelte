<script lang="ts">

import Site from "#scripts/site";
import { search } from "#scripts/stores";
import { filter_questions } from "#scripts/search";

import QuestionCard from "#parts/ui/card.question.svelte";

import Breadcrumbs from "#parts/ui/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";
import Search from "#parts/ui/search.svelte";
import Meta from "#parts/meta.svelte";

import { onMount } from "svelte";


const tags = Site.questions["complete-square"].tags;

let filtered = $derived(filter_questions(
  Site.get_questions("complete-square"),
  search
));


onMount(() => {
  search.tags = Object.fromEntries(tags.map(tag => [tag, false]));
})

</script>


<Meta title="Completing the Square"
  desc="Rewrite expressions in completed square form as quick as you can"
/>


<Breadcrumbs levels={[
  { text: "Questions", intern: "questions" },
  { text: "Completing the Square" },
]} />

<Header title="Completing the Square" />
<Search {tags} />

<div class="content">
  {#each filtered as q}
    <QuestionCard
      title={q.title}
      intern="question/complete-square?shard={q.shard}"
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
