<script lang="ts">

import { page_data } from "../page-data.svelte.ts";
import { Question } from "#scripts/types";

import Katex from "#parts/katex.svelte";
import Tag from "#parts/ui/tag.svelte";
import Clicky from "#parts/ui/clicky.svelte";
import CopyClicky from "#parts/page/copy-clicky.svelte";

import Meta from "#parts/page/meta.svelte";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Section from "#parts/page/section.svelte";
import RenderBlock from "#parts/page/render-block.svelte";
import Line from "#parts/page/line.svelte";


let question: Question | null = $derived(page_data.question);


function display_title(text: string): string
{
  if (text.endsWith(")")) {
    return text.slice(0, text.lastIndexOf("(")).toUpperCase();
  } else {
    return text.toUpperCase();
  }
}

</script>


<Meta title="{question?.shard ?? '?'} · Integrals" />

<Breadcrumbs levels={[
  { text: "Questions", intern: "questions" },
  { text: "Integrals", intern: "questions/integrals" },
  { text: question?.shard ?? "?" },
]} copy={true} shard={question?.shard} />


<section class="question">
  <div class="latex">
    <Katex text={question?.question.content} />
  </div>

  <div class="utils upper">
    <CopyClicky value={Question.sanitise(question?.question.content)} />
  </div>

  <Line width="80%" margin="1rem auto" />

  <div class="utils lower">
    <Clicky text="Open in Workspace" intern="workspace?shard={question?.shard}" />
  </div>
</section>

<Section title="Info">
  <div class="info">
    <div class="details">
      <h4 class="name"> {question?.title ?? "unnamed"} </h4>  
      <p class="date"> {question?.date_display} </p>
      
      {#if question?.desc}
        <p class="desc"> {@html question.desc} </p>
      {/if}
    </div>

    {#if question?.tags}
      <div class="tags">
        {#each question.tags as tag}
          <Tag {tag} />
        {/each}
      </div>
    {/if}
  </div>
</Section>

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

    <span style="position: absolute; right: 0; transform: translateY(-3rem);">
      <CopyClicky value={Question.sanitise(question?.answer.content)} />
    </span>
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
          <Section ctx="inner" closed={false} title={display_title(step)}>
            <RenderBlock {source} />
          </Section>
        {/if}
      {/each}

    {/if}

    <div class="utils solution">
      <Clicky text="Check a Different Solution"
        intern="workspace?shard={question.shard}"
      />

      <Clicky text="Report Error in Solution"
        link="https://github.com/Sup2point0/integrity/issues"
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
          <Section ctx="inner" closed={true} title={display_title(step)}>
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
  text-align: center;
  
  .latex {
    font-size: 150%;
  }
}

.utils {
  &.upper, &.solution {
    display: flex;
    flex-flow: row wrap;
    justify-content: end;
    gap: 0.5rem;
  }
  
  &.upper {
    padding-right: 10%;
  }

  &.lower {
    display: flex;
    justify-content: center;
  }

  &.solution {
    padding-top: 2rem;
  }
}

.info {
  padding: 0 2rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: start;
  
  .details {
    h4.name {
      margin-bottom: 0.4em;
      font-size: 125%;
      font-weight: 450;
    }

    p.date {
      color: $col-text-deut;
      font-size: 100%;
      font-weight: 250;
    }

    p.desc {
      padding-top: 2em;
    }
  }
  
  .tags {
    padding: 0.5rem 0 0;
    height: max-content;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    column-gap: 0.25em;
    row-gap: 0.2em;
    font-size: 125%;
  }
}

</style>
