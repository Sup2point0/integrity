<script lang="ts">

import { page_data } from "../page-data.svelte.ts";
import type { Question } from "#scripts/types";

import Katex from "#parts/katex.svelte";
import Tag from "#parts/ui/tag.svelte";
import RenderBlock from "#parts/page/render-block.svelte";
import Line from "#parts/page/line.svelte";

import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Section from "#parts/page/section.svelte";


let question: Question | null = $derived(page_data.question);

</script>


<Breadcrumbs levels={[
  { text: "Questions", intern: "questions" },
  { text: "Integrals", intern: "questions/integrals" },
  { text: question?.shard ?? "?" },
]} />

<section class="question">
  <Katex text={question?.question.content} />

  {#if question?.desc || question?.tags}
    <div class="info">
      {#if question?.desc}
      <p> {question.desc} </p>
      {/if}

      <Line width="80%" margin="1rem auto" />

      {#if question?.tags}
        <div class="tags">
          {#each question.tags as tag}
            <Tag shard={tag} />
          {/each}
        </div>
      {/if}
    </div>
  {/if}
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
      <Section ctx="inner" closed={false} title={step.toUpperCase()}>
        <RenderBlock {source} />
      </Section>
    {/each}
  </Section>
{/if}


<style lang="scss">

section.question {
  margin: 4rem 0;
  font-size: 150%;
  text-align: center;

  .info {
    margin: 3rem 0;

    .tags {
      margin: 2rem 0 0;
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      column-gap: 0.25em;
      row-gap: 0.2em;
      font-size: 80%;
    }
  }
}

</style>
