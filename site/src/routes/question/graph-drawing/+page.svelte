<script lang="ts">

import { page_data } from "../page-data.svelte.ts";
import { Question } from "#scripts/types";

import Katex from "#parts/katex.svelte";
import Desmos from "#parts/desmos.svelte";
import Tag from "#parts/ui/tag.svelte";
import CopyClicky from "#parts/page/copy-clicky.svelte";

import Meta from "#parts/page/meta.svelte";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Section from "#parts/page/section.svelte";
import RenderBlock from "#parts/page/render-block.svelte";
import Line from "#parts/page/line.svelte";


let question: Question | null = $derived(page_data.question);

</script>


<Meta title="{question?.shard ?? '?'} · Graph Drawing">
  <script src="https://www.desmos.com/api/v1.10/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
</Meta>


<Breadcrumbs levels={[
  { text: "Questions", intern: "questions" },
  { text: "Graph Drawing", intern: "questions/graph-drawing" },
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

<Section title="Answer">
  <Desmos
    blocks={question?.question}
    bounds={question?.["graph-bounds"]}
  />
</Section>

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
  &.upper {
    display: flex;
    flex-flow: row wrap;
    justify-content: end;
    gap: 0.5rem;
  }
  
  &.upper {
    padding-right: 10%;
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

#desmos-window {
  margin: 1rem 0;
  width: 100%;
  height: 80vh;
}

</style>
