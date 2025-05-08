<script lang="ts">

import Site from "#scripts/site";
import { search } from "#scripts/stores";

import QuestionCard from "#parts/ui/card.question.svelte";

import Meta from "#parts/page/meta.svelte";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";
import Search from "#parts/page/search.svelte";

import { onMount } from "svelte";


const questions = Site.get_questions_of_topic("special");
const tags = Site.questions["special"].tags;

let filtered = $derived(search.filter_questions(questions));


onMount(() => {
  search.tags = Object.fromEntries(tags.map(tag => [tag, false]));
  search.methods = {};
})

</script>


<Meta title="Special Questions"
  desc="Special one-off questions on wider areas of mathematics"
/>


<Breadcrumbs levels={[
  { text: "Questions", intern: "questions" },
  { text: "Special" },
]} />

<Header title="Special Questions" />
<Search />

<div class="content">
  {#each filtered as question (question.shard)}
    <QuestionCard {question}
      latex={search.show.question ? question.question.content : undefined}
      style="row"
    />
  {/each}
</div>

<aside>  
  {#if filtered.length > 0}
    <p> Showing <span>{filtered.length}</span> question{filtered.length === 1 ? "" : "s"} of {questions.length} </p>
  {:else}
    <p> Oops, no questions found! </p>
  {/if}
</aside>


<style lang="scss">

.content {
  display: flex;
  flex-flow: column;
  align-items: stretch;
  gap: 1rem;
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
}

</style>
