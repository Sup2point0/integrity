<script lang="ts">

import type { Question } from "#scripts/types";

import Katex from "#parts/katex.svelte";
import RenderBlock from "#parts/render-block.svelte";

import Header from "#parts/core/header.svelte";
import Breadcrumbs from "#parts/ui/breadcrumbs.svelte";
import Section from "#parts/section.svelte";

let { data } = $props();

const question: Question = data.question;

</script>


<Breadcrumbs levels={[
  { text: "Questions", intern: "questions" },
  { text: "Completing the Square", intern: "questions/complete-square" },
  { text: question.shard ?? "?" },
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


<style lang="scss">

section {
  text-align: center;

  &.question {
    margin: 4rem 0;
    font-size: 200%;
  }
}

</style>
