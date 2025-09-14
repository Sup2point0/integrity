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


const questions = Site.get_list_of_all_questions();
const tags = Site.get_all_tags();
const methods = Site.get_all_methods();

let limit = $state(60);
let filtered = $derived($search.filter_questions(questions).slice(0, limit));


onMount(() => {
  $search.tags = Object.fromEntries(tags.map(tag => [tag, false]));
  $search.methods = Object.fromEntries(methods.map(method => [method, false]));
})

</script>


<Meta title="All Questions"
  desc="Questions from all topics on Integrity, including integrals, graphs, completing the square and specials"
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

<SearchFooter bind:limit
  found={filtered.length}
  total={questions.length}
/>


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
      color: $col-prot;
    }
  }
}

</style>
