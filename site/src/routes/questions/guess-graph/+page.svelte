<script lang="ts">

import Site from "#scripts/site";
import { search } from "#scripts/stores";
import { filter_questions } from "#scripts/search";

import QuestionCard from "#parts/ui/card.question.svelte";

import Breadcrumbs from "#parts/ui/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";
import Search from "#parts/ui/search.svelte";
import Meta from "#parts/meta.svelte";

import { onMount } from "svelte";


const data = Site.questions["guess-graph"] ?? {};
const questions = Object.values(data);
const tags = data.tags;
const count = questions.length;

let filtered = $derived(filter_questions(
  Object.values(questions),
  search
));


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
  {#each filtered as q}
    <!-- TODO preview image -->
    <QuestionCard
      title={q.title}
      intern="question/guess-graph?shard={q.shard}"
      date={search.show.dates ? q.date : undefined}
      tags={search.show.tags ? q.tags : undefined}
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
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
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
