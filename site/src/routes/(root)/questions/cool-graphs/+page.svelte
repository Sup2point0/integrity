<script lang="ts">

import Site from "#scripts/site";
import { search } from "#scripts/stores";

import DesmosAPI from "#parts/desmos-api.svelte";
import QuestionCard from "#parts/ui/card.question.svelte";

import Meta from "#parts/page/meta.svelte";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";
import Search from "#parts/page/search.svelte";
import SearchFooter from "#parts/page/search-footer.svelte";

import { onMount } from "svelte";


const questions = Site.get_questions_of_topic("cool-graphs");
const tags = Site.questions["cool-graphs"].tags;
const methods = Site.questions["cool-graphs"].methods;

let filtered = $derived($search.filter_questions(questions));


onMount(() => {
  $search.tags = Object.fromEntries(tags.map(tag => [tag, false]));
  $search.methods = Object.fromEntries(methods.map(method => [method, false]));
});

</script>


<Meta title="Cool Graphs"
  desc="A collection of cool graphs I’ve found!"
/>
<DesmosAPI />


<Breadcrumbs levels={[
  { text: "Questions", intern: "questions" },
  { text: "Cool Graphs" },
]} />

<Header title="Cool Graphs" />
<Search />

<div class="content {$search.view}">
  {#each filtered as question (question.shard)}
    <QuestionCard {question}
      desmos={$search.show.question ? question.desmos : undefined}
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
}

</style>
