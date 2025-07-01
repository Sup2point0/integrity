<!-- @component QuestionCard

A card for selecting a question. -->

<script lang="ts">

import { search } from "#scripts/stores";
import type { Latex, Block, Question } from "#scripts/types";

import SaveButtons from "#parts/page/save-buttons.svelte";
import Tag from "#parts/ui/tag.svelte";
import Katex from "#parts/katex.svelte";
import Desmos from "#parts/desmos.svelte";

import { fade, slide } from "svelte/transition";
import { base } from "$app/paths";


interface Props {
  question: Question;
  latex?: Latex;
  desmos?: Block | Block[];
  style?: "block" | "row";
}

let { question, latex, desmos, style = "block" }: Props = $props();


function check_valid(data: Array<any>): boolean
{
  return data && data.length > 0 && data[0];
}

</script>


<a class="question-card {style}"
  href="{base}/question/{question.topic}?shard={question.shard}"
>
  {#if $search.show.question}
    <div class="question" transition:fade={{ duration: 250 }}>
      {#if $search.show.difficulties && question.difficulty}
        <div class="difficulty-indicator {question.difficulty}"
          title={question.difficulty.toUpperCase()}
        >
          {#if style === "row"}
            {question.difficulty.toUpperCase()}
          {/if}
        </div>
      {/if}

      {#if latex}
        <Katex text={latex} inline={false} client_render={true} />
      {/if}

      {#if desmos}
        <Desmos blocks={desmos} bounds={question["graph-bounds"]} controls={false} />
      {/if}
    </div>
  {/if}

  <div class="info">
    <div class="left-right">
      <div class="row">
        <div class="upper">
          <div class="text">
            {#if $search.show.shard}
              <p class="shard" transition:slide={{ duration: 500 }}>
                {question.shard}
              </p>
            {/if}

            {#if question.title} <h4 class="name"> {question.title} </h4> {/if}
            
            {#if $search.show.dates && question.date}
              <p class="date" transition:slide={{ duration: 500 }}>
                {question.date_display}
              </p>
            {/if}
          </div>
        </div>

        <div class="lower">
          {#if check_valid(question.tags) && $search.show.tags}
            <span class="tags" transition:fade={{ duration: 250 }}>
              {#each question.tags as tag}
                <Tag {tag} margin={"0.25em"} />
              {/each}
            </span>
          {/if}

          {#if check_valid(question.methods) && $search.show.methods}
            <span class="tags" transition:fade={{ duration: 250 }}>
              {#each question.methods as method}
                <Tag tag={method} kind="deut" margin={"0.25em"} />
              {/each}
            </span>
          {/if}
        </div>
      </div>

      <div class="save-buttons">
        <SaveButtons shard={question.shard} />
      </div>
    </div>
  </div>
</a>


<style lang="scss">

a.question-card {
  min-width: 12em;
  padding: 0.75em;
  flex: 1 0 auto;
  display: flex;
  justify-content: stretch;
  align-items: stretch;

  &.block {
    max-width: max(20vw, 24rem);
    flex-flow: column;
  }
  &.row {
    width: 100%;
    flex-flow: row-reverse;
    justify-content: end;
  }

  @include font-ui;
  color: $col-text-fallback;
  color: $col-text;
  text-decoration: none;
  background: auto;
  border: 1px solid $col-line-fallback;
  border: 1px solid $col-line;
  border-radius: 0.5em;
  box-shadow: 0 2px 2px -0.5px $col-line;

  @include interact(
    $hover: $col-card-hover,
    $click: $col-card-click,
    $t: 0.16,
  );
  @include focus-outline;
}

.question {
  min-height: 4rem;
  padding: 1rem;
  flex-grow: 1;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  position: relative;

  font-size: 80%;
  a.question-card.row & { font-size: 100%; }
  text-align: center;
  overflow-x: hidden;

  .difficulty-indicator {
    $size: 0.65rem;
    height: $size;
    aspect-ratio: 1;
    position: absolute;
    top: 0.15rem;
    right: 0.1rem;
    border-radius: $size / 2;

    &.based    { background: $col-based; }
    &.incline  { background: $col-incline; }
    &.manifold { background: $col-manifold; }
    &.chaos    { background: $col-chaos; }

    a.question-card.row & {
      height: unset;
      aspect-ratio: unset;
      padding: 0.2em 0.5em;
      color: white;
      font-size: 90%;
      border-radius: 0.4rem;
    }
  }
}

.info {
  padding: 1em 0.4em 0.4em;
  text-align: left;

  a.question-card.block & {
    border-top: 1px solid $col-line-fallback;
    border-top: 1px solid $col-line;
  }

  a.question-card.row & {
    min-width: 40%;
    flex: 0 1 auto;
    border-right: 1px solid $col-line-fallback;
    border-right: 1px solid $col-line;
  }
}

.left-right {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: start;
}

.row {
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
  align-items: start;
  gap: 1rem;
}

.save-buttons {
  flex-grow: 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

.upper {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
}

.text {
  h4 {
    display: inline-block;
    margin: 0 0 0.2em;
    font-size: 125%;
    font-weight: 450;
  }

  p.date {
    margin: 0;
    color: $col-text-deut;
    font-size: 100%;
    font-weight: 250;
  }
}

p.shard {
  width: max-content;
  padding: 0.25em 0.4em;
  margin: 0 0 1em;
  white-space: nowrap;
  @include font-code;
  font-size: 80%;
  background: $col-hover;
  border-radius: 0.5em;
}

</style>
