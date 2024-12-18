<script lang="ts">

import Site from "#scripts/site";
import { search } from "#scripts/stores";

import QuestionCard from "#parts/ui/card.question.svelte";

import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";
import Search from "#parts/page/search.svelte";
import Meta from "#parts/page/meta.svelte";

import { onMount } from "svelte";


const tags = Site.questions["integrals"].tags;
const count = Site.get_questions("integrals").length;

let filtered = $derived(
  search.filter_questions(Site.get_questions("integrals"))
);


onMount(() => {
  search.tags = Object.fromEntries(tags.map(tag => [tag, false]));
})

</script>


<Meta title="Integrals"
  desc="Questions for integration"
/>


<Breadcrumbs levels={[
  { text: "Questions", intern: "questions" },
  { text: "Integrals" },
]} />

<Header title="Integrals" />
<Search {tags} />

<div class="content {search.view}">
  {#each filtered as question}
    <QuestionCard {question}
      latex={search.show.question ? question.question.content : undefined}
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
