<script lang="ts">

import Site from "#scripts/site";
import { search } from "#scripts/stores";

import Desmos from "#parts/desmos.svelte";
import QuestionCard from "#parts/ui/card.question.svelte";

import Meta from "#parts/page/meta.svelte";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";
import Search from "#parts/page/search.svelte";

import { onMount } from "svelte";


const questions = Site.get_list_of_all_questions();
const tags = Site.get_all_tags();
const methods = Site.get_all_methods();

let filtered = $derived($search.filter_questions(questions));


onMount(() => {
  $search.tags = Object.fromEntries(tags.map(tag => [tag, false]));
  $search.methods = Object.fromEntries(methods.map(method => [method, false]));
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
<Search />

<div class="content {$search.view}">
  {#each filtered as question}
    <QuestionCard {question}
      style={$search.view === "list" ? "row" : "block"}
    />
  {/each}
</div>

<aside>
  {#if filtered.length > 0}
    <p> Showing <span>{filtered.length}</span> question{filtered.length == 1 ? "" : "s"} of {questions.length} </p>
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
    grid-template-columns: repeat(auto-fit, clamp(16rem, 30%, 24rem));
    justify-content: center;
  }

  &.list {
    flex-flow: column;
    align-items: stretch;
  }

  &.grid-wide {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    justify-content: center;
  }
}

aside {
  margin-top: 1.5rem;
  text-align: center;
  
  p {
    color: $col-text-deut;

    span {
      font-weight: 400;
      color: $col-prot;
    }
  }
}

</style>
