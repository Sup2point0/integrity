<script lang="ts">

import Site from "#scripts/site";
import { search } from "#scripts/stores";

import QuestionCard from "#parts/ui/card.question.svelte";

import Meta from "#parts/page/meta.svelte";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";
import Search from "#parts/page/search.svelte";

import { onMount } from "svelte";


const questions = Site.get_list_of_all_questions();
const count = questions.length;
const tags = Site.get_all_tags();

let filtered = $derived(
  search.filter_questions(questions)
);


onMount(() => {
  search.tags = Object.fromEntries(tags.map(tag => [tag, false]));
})

</script>


<Meta title="All Questions"
  desc="Questions from all topics"
/>


<Breadcrumbs levels={[
  { text: "Questions", intern: "questions" },
  { text: "All" },
]} />

<Header title="All Questions" />
<Search {tags} />

<div class="content {search.view}">
  {#each filtered as question}
    <QuestionCard {question}
      latex={question.question.kind === "latex" ? question.question.content : undefined}
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
    display: grid;
    grid-template-columns: repeat(auto-fit, max(16rem, 30%));
    justify-content: center;
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
