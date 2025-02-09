<script lang="ts">

import Site from "#scripts/site";
import { search } from "#scripts/stores";

import QuestionCard from "#parts/ui/card.question.svelte";

import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";
import Search from "#parts/page/search.svelte";
import Meta from "#parts/page/meta.svelte";

import { onMount } from "svelte";


const data = Site.questions["guess-graph"] ?? {};
const questions = Object.values(data);
const tags = data.tags;
const count = questions.length;

let filtered = $derived(
  search.filter_questions(Object.values(questions))
);


onMount(() => {
  search.tags = Object.fromEntries(tags.map(tag => [tag, false]));
})

</script>


<Meta title="Guess the Graph"
  desc="Given what a graph, can you guess its expression?"
/>


<Breadcrumbs levels={[
  { text: "Questions", intern: "questions" },
  { text: "Guess the Graph" },
]} />

<Header title="Guess the Graph" />
<Search {tags} />

<div class="content">
  {#each filtered as question}
    <QuestionCard {question} />
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
  flex-flow: row wrap;
  justify-content: center;
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
