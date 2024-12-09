<!-- @component QuestionCard

A card for selecting a question. -->

<script lang="ts">

import type { Latex } from "#scripts/types";

import Tag from "#parts/ui/tag.svelte";
import Katex from "#parts/katex.svelte";

import { fade } from "svelte/transition";
import { base } from "$app/paths";


interface Props {
  title?: string;
  intern?: string;
  latex?: Latex;
  date?: Date;
  tags?: string[];
  style?: "block" | "row";
}

let { title, intern, latex, date, tags, style = "block" }: Props = $props();

</script>


<a class="question-card {style}"
  href="{base}/{intern}"
>
  <div class="question">
    {#if latex}
      <Katex text={latex} inline={false} />
    {/if}
  </div>

  <div class="info">
    {#if title} <h4> {title} </h4> {/if}
    
    {#if date}
      <p transition:fade={{ duration: 250 }}>
        {date}
      </p>
    {/if}

    {#if tags && tags.length > 0}
      <div class="tags"
        transition:fade={{ duration: 250 }}
      >
        {#each tags as tag}
          <Tag shard={tag} />
        {/each}
      </div>
    {/if}
  </div>
</a>


<style lang="scss">

a.question-card {
  min-width: 12em;
  padding: 0.75em;
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;

  @include font-ui;
  color: $col-text;
  text-decoration: none;
  background-color: auto;
  border: 1px solid $col-line;
  border-radius: 0.5em;
  box-shadow: 0 2px 2px -0.5px $col-line;

  @include interact(
    $hover: light-dark(oklch(99% 0 0), oklch(22% 0 0)),
    $click: light-dark(oklch(96% 0 0), oklch(28% 0 0)),
    $t: 0.16,
  );
  @include focus-outline;

  &.block {
    max-width: 20vw;
  }
  &.row {
    width: 100%;
  }
}

.question {
  min-height: 4rem;
  padding: 1rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 80%;
  overflow-x: auto;
  scrollbar-width: thin;
}

.info {
  padding: 1em 0.4em 0.4em;
  text-align: left;
  border-top: 1px solid $col-line;

  h4 {
    margin-bottom: 0.2em;
    font-size: 125%;
    font-weight: 450;
  }

  p {
    color: $col-text-deut;
    font-size: 100%;
    font-weight: 250;
  }
}

.tags {
  margin-top: 1em;
  display: flex;
  justify-content: start;
  align-items: start;
  flex-wrap: wrap;
  column-gap: 0.25em;
  row-gap: 0.2em;
}

</style>
