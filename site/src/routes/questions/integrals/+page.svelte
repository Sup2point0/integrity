<script lang="ts">

import Site from "#scripts/site";
import { search } from "#scripts/stores";

import QuestionCard from "#parts/ui/card.question.svelte";
import Clicky from "#parts/ui/clicky.svelte";

import Meta from "#parts/page/meta.svelte";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";
import Search from "#parts/page/search.svelte";

import { onMount } from "svelte";


const questions = Site.get_questions_of_topic("integrals");
const tags = Site.questions["integrals"].tags;
const methods = Site.questions["integrals"].methods;

let limit = $state(60);
let filtered = $derived($search.filter_questions(questions).slice(0, limit));


onMount(() => {
  $search.tags = Object.fromEntries(tags.map(tag => [tag, false]));
  $search.methods = Object.fromEntries(methods.map(method => [method, false]));
})

</script>


<Meta title="Integrals"
  desc="250+ handcrafted high-difficulty integrals for avid integrators and maths fans looking to hone integration prowess."
/>


<Breadcrumbs levels={[
  { text: "Questions", intern: "questions" },
  { text: "Integrals" },
]} />

<Header title="Integrals" />
<Search />

<div class="content {$search.view}">
  {#each filtered as question (question.shard)}
    <QuestionCard {question}
      latex={$search.show.question ? question.question.content : undefined}
      style={$search.view === "list" ? "row" : "block"}
    />
  {/each}
</div>

<aside>  
  {#if filtered.length > 0}
    <p> Showing <span>{filtered.length}</span> question{filtered.length === 1 ? "" : "s"} of {questions.length} </p>
  {:else}
    <p> Oops, no questions found! </p>
  {/if}
  
  {#if limit < questions.length}
    <div class="buttons">
      <Clicky text="Show More" action={() => { limit += 60; }} />
      <Clicky text="Show All" action={() => { limit = questions.length }} />
    </div>
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
  padding: 2.5rem 0 1rem;
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;
  
  p {
    padding-bottom: 1rem;
    color: $col-text-deut;

    span {
      font-weight: 400;
      color: $col-prot;
    }
  }

  .buttons {
    width: 100%;
    display: flex;
    flex-flow: row;
    justify-content: center;
    gap: 0.5rem;
  }
}

</style>
