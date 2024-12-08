<script lang="ts">

import Site from "#scripts/site";
import type { Question } from "#scripts/types";

import Breadcrumbs from "#parts/ui/breadcrumbs.svelte";
import Link from "#parts/ui/link.svelte";
import Katex from "#parts/katex.svelte";
import Header from "#parts/core/header.svelte";

import { page } from "$app/stores";
import { onMount } from "svelte";
import { error } from "@sveltejs/kit";


let loaded = false;
let shard: string | null = null;
let question: Question | null = null;


onMount(() => {
  let params = $page.url.searchParams;

  shard = params.get("shard");
  if (shard == null) {
    error(404, { message: "Question not found!" });
  }

  question = Site.questions["complete-square"].questions[shard!];
  if (question == null) {
    error(404, { message: "Question not found!" });
  }

  loaded = true;
});

</script>


{#if loaded && question}
  <Breadcrumbs levels={[
    { text: "Completing the Square", intern: "complete-the-square" },
    { text: shard },
  ]} />

  <section class="question">
    <Katex text={question.question.content} />
  </section>

  <section>
    <h2> Hints </h2>
  </section>

  <section>
    <h2> Answer </h2>
  </section>

  <section>
    <h2> Solution </h2>
  </section>

{:else}
  <p> Hold tight, loading... </p>

{/if}


<style lang="scss">

section {
  text-align: center;

  &.question {
    margin: 3rem 0;
    font-size: 200%;
  }
}

</style>
