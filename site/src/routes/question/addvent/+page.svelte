<script lang="ts">

import Site from "#scripts/site";
import type { Question } from "#scripts/types";

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

  question = Site.questions["addvent"].questions[shard!];
  if (question == null) {
    error(404, { message: "Question not found!" });
  }

  loaded = true;
});

</script>


{#if loaded && question}
  <Breadcrumbs levels={[
    { text: "Addvent", intern: "questions/addvent" },
    { text: shard ?? "?" },
  ]} />

  <section class="question">
    <RenderBlock source={question.question} />
  </section>

  {#if question.notes}
    <Section title="Notes">
      <RenderBlock source={question.notes} />
    </Section>
  {/if}

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
    margin: 3rem 0;
    font-size: 150%;
  }
}

</style>
