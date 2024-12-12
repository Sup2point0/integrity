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
const count = Site.get_questions("complete-square").length;

let filtered = $derived(
  filter_questions(Site.get_questions("complete-square"), search)
);


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

<div class="content {search.view}">
  {#each filtered as q}
    <QuestionCard
      title={q.title}
      intern="question/complete-square?shard={q.shard}"
      latex={q.question.content}
      date={search.show.dates ? q.date : undefined}
      tags={search.show.tags ? q.tags : undefined}
      style={search.view === "grid" ? "block" : "row"}
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
  gap: 1rem;

  &.grid {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }

  &.list {
    flex-direction: column;
    align-items: stretch;
  }
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
