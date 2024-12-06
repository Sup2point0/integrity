<!-- @component QuestionCard

A card for selecting a question. -->

<script lang="ts">

import type { Latex } from "#scripts/types";

import Tag from "#parts/ui/tag.svelte";
import Katex from "#parts/katex.svelte";

import { base } from "$app/paths";


interface Props {
  title: string;
  intern?: string;
  latex?: Latex;
  date?: string;
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
    <h4> {title} </h4>
    <p> {date} </p>

    <div class="tags">
      {#each tags ?? [] as tag}
        <Tag shard={tag} />
      {/each}
    </div>
  </div>
</a>


<style lang="scss">

a.question-card {
  min-width: 12em;
  padding: 0.75em;
  display: block;
  flex: 1 0 auto;
  @include font-ui;
  color: $col-text;
  text-decoration: none;
  background-color: white;
  border: 1px solid $col-line;
  border-radius: 0.5em;
  box-shadow: 0 2px 2px -0.5px $col-line;

  @include interact(
    $hover: oklch(99% 0 0),
    $click: oklch(96% 0 0),
    $t: 0.16,
  );

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
