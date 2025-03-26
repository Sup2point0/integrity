<!-- @component QuestionCard

A card for selecting a question. -->

<script lang="ts">

import { search } from "#scripts/stores";
import type { Latex, Block, Question } from "#scripts/types";

import SaveButtons from "#parts/page/save-buttons.svelte";
import Tag from "#parts/ui/tag.svelte";
import Katex from "#parts/katex.svelte";
import DesmosPreview from "#parts/desmos-preview.svelte";

import { fade, slide } from "svelte/transition";
import { base } from "$app/paths";


interface Props {
  question: Question;
  latex?: Latex;
  desmos?: Block | Block[];
  style?: "block" | "row";
}

let { question, latex, desmos, style = "block" }: Props = $props();

</script>


<a class="question-card {style}"
  href="{base}/question/{question.topic}?shard={question.shard}"
>
  {#if search.show.question}
    <div class="question" transition:fade={{ duration: 250 }}>
      {#if latex}
        <Katex text={latex} inline={false} />
      {/if}

      {#if desmos}
        <DesmosPreview blocks={desmos} bounds={question["graph-bounds"]} />
      {/if}
    </div>
  {/if}

  <div class="info">
    <div class="left-right">
      <div class="row">
        <div class="upper">
          <div class="text">
            {#if search.show.shard}
              <p class="shard" transition:slide={{ duration: 500 }}>
                {question.shard}
              </p>
            {/if}

            {#if question.title} <h4 class="name"> {question.title} </h4> {/if}
            
            {#if search.show.dates && question.date}
              <p class="date" transition:slide={{ duration: 500 }}>
                {question.date_display}
              </p>
            {/if}
          </div>
        </div>

        <div class="lower">
          {#if search.show.tags && question.tags && question.tags.length > 0}
            <span class="tags" transition:fade={{ duration: 250 }}>
              {#each question.tags as tag}
                <Tag {tag} margin={"0.25em"} />
              {/each}
            </span>
          {/if}

          {#if search.show.methods && question.methods && question.methods.length > 0}
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
    max-width: max(20vw, 20rem);
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
  text-align: center;
  font-size: 80%;
  a.question-card.row & { font-size: 100%; }
  overflow-x: auto;
  scrollbar-width: thin;
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
    margin-bottom: 0.2em;
    font-size: 125%;
    font-weight: 450;
  }

  p.date {
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
  // color: $col-deut;
  font-size: 80%;
  background: $col-hover;
  border-radius: 0.5em;
}

</style>
