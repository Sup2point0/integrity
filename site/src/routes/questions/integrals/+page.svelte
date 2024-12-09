<script lang="ts">

import Site from "#scripts/site";
import { search } from "#scripts/stores";
import { filter_questions } from "#scripts/search";

import QuestionCard from "#parts/ui/card.question.svelte";

import Header from "#parts/core/header.svelte";
import Search from "#parts/ui/search.svelte";
import Meta from "#parts/meta.svelte";

import { onMount } from "svelte";


const tags = Site.questions["integrals"].tags;
const count = Site.get_questions("integrals").length;

let filtered = $derived(filter_questions(
  Site.get_questions("integrals"),
  search
));


onMount(() => {
  search.tags = Object.fromEntries(tags.map(tag => [tag, false]));
})

</script>


<Meta title="Integrals"
  desc="Questions for integration"
/>


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
</div>

<aside>
  {#if filtered.length > 0}
    <p> Showing <span>{filtered.length}</span> questions of {count} </p>
  {:else}
    <p> Oops, no questions found! </p>
  {/if}
</aside>


<style lang="scss">

.content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}

aside {
  margin-top: 1.5rem;
  text-align: center;
  
  p {
    color: $col-text-deut;

    span {
      color: $col-prot;
    }
  }
}

</style>
