<script lang="ts">

import Site from "#scripts/site";
import { search } from "#scripts/stores";

import QuestionCard from "#parts/ui/card.question.svelte";

import Meta from "#parts/page/meta.svelte";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";
import Search from "#parts/page/search.svelte";
import SearchFooter from "#parts/page/search-footer.svelte";

import { onMount } from "svelte";


const questions = Site.get_questions_of_topic("graph-drawing");
const tags = Site.questions["graph-drawing"].tags;
const methods = Site.questions["graph-drawing"].methods;

let filtered = $derived($search.filter_questions(questions));


onMount(() => {
  $search.tags = Object.fromEntries(tags.map(tag => [tag, false]));
  $search.methods = Object.fromEntries(methods.map(method => [method, false]));
});

</script>


<Meta title="Graph Drawing"
  desc="Questions for practising graph drawing"
/>


<Breadcrumbs levels={[
  { text: "Questions", intern: "questions" },
  { text: "Graph Drawing" },
]} />

<Header title="Graph Drawing" />
<Search />

<div class="content {$search.view}">
  {#each filtered as question (question.shard)}
    <QuestionCard {question}
      style={$search.view === "list" ? "row" : "block"}
    />
  {/each}
</div>

<SearchFooter found={filtered.length} total={questions.length} />


<style lang="scss">

.content {
  display: flex;
  gap: 1rem;

  &.grid, &.grid-wide {
    display: grid;
    grid-template-columns: repeat(auto-fit, max(16rem, 30%));
    justify-content: center;
  }

  &.list {
    flex-flow: column;
    align-items: stretch;
  }

  :global(.katex) {
    font-size: 150%;
  }
}

</style>
