<script lang="ts">

import { page_data } from "../page-data.svelte.ts";
import type { Question } from "#scripts/types";

import Katex from "#parts/katex.svelte";
import Tag from "#parts/ui/tag.svelte";
import RenderBlock from "#parts/page/render-block.svelte";
import Line from "#parts/page/line.svelte";
import Clicky from "#parts/ui/clicky.svelte";

import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Section from "#parts/page/section.svelte";


let question: Question | null = $derived(page_data.question);

</script>


<Breadcrumbs levels={[
  { text: "Questions", intern: "questions" },
  { text: "Integrals", intern: "questions/integrals" },
  { text: question?.shard ?? "?" },
]} copy={true} shard={question?.shard} />

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
            <Tag {tag} />
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
    {#if Array.isArray(question.solution)}
      {#each question.solution as source}
        <RenderBlock {source} />
      {/each}

    {:else}
      {#each Object.entries(question.solution) as [step, source]}
        {#if step === "_"}
          <RenderBlock {source} />
        {:else}
          <Section ctx="inner" closed={false} title={step.toUpperCase()}>
            <RenderBlock {source} />
          </Section>
        {/if}
      {/each}

    {/if}

    <div style:padding="1rem 0" style:float="right">
      <Clicky text="Check a Different Solution"
        intern="workspace?topic={question.topic}&shard={question.shard}"
      />
    </div>
  </Section>
{/if}

{#if question?.alternates}
  <Section title="Alternatives">
    {#if Array.isArray(question.alternates)}
      {#each question.alternates as source}
        <RenderBlock {source} />
      {/each}
    
    {:else}
      {#each Object.entries(question.alternates) as [step, source]}
        {#if step === "_"}
          <RenderBlock {source} />
        {:else}
          <Section ctx="inner" closed={true} title={step.toUpperCase()}>
            <RenderBlock {source} />
          </Section>
        {/if}
      {/each}
    
    {/if}
  </Section>
{/if}


<style lang="scss">

section.question {
  padding: 3rem 0 2rem;
  font-size: 150%;
  text-align: center;

  .info {
    padding: 1rem 0 0;

    .tags {
      padding: 0.5rem 0 0;
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      column-gap: 0.25em;
      row-gap: 0.2em;
      font-size: 80%;
    }
  }
}

section.buttons {
  padding: 3rem 0 0;
}

</style>
