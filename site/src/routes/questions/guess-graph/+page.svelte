<script lang="ts">

import Site from "#scripts/site";
import { search, userprefs } from "#scripts/stores";

import QuestionCard from "#parts/ui/card.question.svelte";

import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";
import Search from "#parts/page/search.svelte";
import Meta from "#parts/page/meta.svelte";

import { onMount } from "svelte";


const questions = Site.get_questions_of_topic("guess-graph");
const tags = Site.questions["guess-graph"].tags;
const methods = Site.questions["guess-graph"].methods;

let filtered = $derived(search.filter_questions(questions));


onMount(() => {
  search.tags = Object.fromEntries(tags.map(tag => [tag, false]));
  search.methods = Object.fromEntries(methods.map(method => [method, false]));
})

</script>


<Meta title="Guess the Graph"
  desc="Given what a graph, can you guess its expression?"
>
  <script src="https://www.desmos.com/api/v1.10/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
</Meta>


<Breadcrumbs levels={[
  { text: "Questions", intern: "questions" },
  { text: "Guess the Graph" },
]} />

<Header title="Guess the Graph" />
<Search />

<div class="content {$userprefs["search-view"]}">
  {#each filtered as question (question.shard)}
    <QuestionCard {question}
      desmos={search.show.question ? question.question.content : undefined}
      style={$userprefs["search-view"] === "grid" ? "block" : "row"}
    />
  {/each}
</div>

<aside>
  {#if filtered.length > 0}
    <p> Showing <span>{filtered.length}</span> questions of {questions.length} </p>
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
    flex-flow: column;
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
