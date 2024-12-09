<script lang="ts">

import Site from "#scripts/site";
import type { Question } from "#scripts/types";

import Katex from "#parts/katex.svelte";
import RenderBlock from "#parts/render-block.svelte";

import Header from "#parts/core/header.svelte";
import Breadcrumbs from "#parts/ui/breadcrumbs.svelte";
import Section from "#parts/section.svelte";

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
    { text: "Questions", intern: "questions" },
    { text: "Completing the Square", intern: "questions/complete-square" },
    { text: shard ?? "?" },
  ]} />

  <section class="question">
    <Katex text={question.question.content} />
  </section>

  {#if question.hints}
    <Section title="Hints">
      {#each Object.entries(question.hints) as [hint, source]}
        <Section ctx="inner" title={hint}>
          <RenderBlock {source} />
        </Section>
      {/each}
    </Section>
  {/if}

  {#if question.answer}
    <Section title="Answer">
      <RenderBlock source={question.answer} />
    </Section>
  {/if}

  {#if question.solution}
    <Section title="Solution">
      {#each Object.entries(question.solution) as [step, source]}
        <Section ctx="inner" closed={false} title={step}>
          <RenderBlock {source} />
        </Section>
      {/each}
    </Section>
  {/if}

{:else}
  <p> Hold tight, loading... </p>

{/if}


<style lang="scss">

section {
  text-align: center;

  &.question {
    margin: 4rem 0;
    font-size: 200%;
  }
}

</style>
