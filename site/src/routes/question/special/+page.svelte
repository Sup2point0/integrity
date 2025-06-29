<script lang="ts">

import { page_data } from "../page-data.svelte.ts";
import { Question, type Block } from "#scripts/types";

import Tag from "#parts/ui/tag.svelte";
import RenderBlock from "#parts/page/render-block.svelte";

import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";
import Section from "#parts/page/section.svelte";


let question: Question | null = $derived(page_data.question);

let sections: [string, Block][] = $derived(
  question ? Object.entries(question).filter(([section, _]) => section.endsWith(":")) : []
);

</script>


<Breadcrumbs levels={[
  { text: "Questions", intern: "questions" },
  { text: "Special", intern: "questions/special" },
  { text: question?.shard ?? "?" },
]} copy={true} shard={question?.shard} />


<Header title={question?.title} capt={question?.date_display}>
  {#if question?.tags}
    <div class="tags">
      {#each question.tags as tag}
        <Tag {tag} />
      {/each}
    </div>
  {/if}
</Header>

{#if question?.desc}
  <article>
    {#each question.desc as chunk}
      <p>
        {@html chunk}
      </p>
    {/each}
  </article>
{/if}

{#each sections as [section, content]}
  <Section title={section.slice(0, -1).toUpperCase()} closed={false}>
    {#if Array.isArray(content)}
      {#each content as source}
        <RenderBlock {source} />
      {/each}

    {:else}
      {#each Object.entries(content) as [step, source]}
        {#if step === "_"}
          <RenderBlock {source} />
        {:else}
          <Section ctx="inner" title={step.toUpperCase()}>
            <RenderBlock {source} />
          </Section>
        {/if}
      {/each}

    {/if}
  </Section>
{/each}


<style lang="scss">

section.question {
  padding: 3rem 0 2rem;
  text-align: center;
  
  .latex {
    font-size: 150%;
  }
}

.utils {
  &.uper, &.solution {
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

</style>
