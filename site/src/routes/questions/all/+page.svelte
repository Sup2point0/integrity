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


const data = Object.values(Site.questions);
const questions: Question[] = [].concat.apply(
  ...data.map(topic => Object.values(topic.questions))
);
const count = questions.length;
const tags: string[] = [].concat.apply(
  ...data.map(topic => topic.tags)
);

let filtered = $derived(filter_questions(questions, search));


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

<div class="content">
  {#each filtered as q}
    <QuestionCard
      title={q.title}
      intern="question/integrals?shard={q.shard}"
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
