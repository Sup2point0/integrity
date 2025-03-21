<script lang="ts">

import { page_data } from "../page-data.svelte.ts";
import type { Question } from "#scripts/types";

import Katex from "#parts/katex.svelte";
import RenderBlock from "#parts/page/render-block.svelte";

import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Section from "#parts/page/section.svelte";

let question: Question | null = $derived(page_data.question);

</script>


<Breadcrumbs levels={[
  { text: "Questions", intern: "questions" },
  { text: "Completing the Square", intern: "questions/complete-square" },
  { text: question?.shard ?? "?" },
]} copy={true} shard={question?.shard} />

<section class="question">
  <Katex text={question?.question.content} />
</section>

{#if question?.hints}
  <Section title="Hints">
    {#each Object.entries(question.hints) as [hint, source]}
      <Section ctx="inner" title={hint}>
        <RenderBlock {source} />
      </Section>
    {/each}
  </Section>
{/if}

{#if question?.answer}
  <Section title="Answer">
    <RenderBlock source={question.answer} />
  </Section>
{/if}

{#if question?.solution}
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
