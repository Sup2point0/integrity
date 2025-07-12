<!-- @component QuestionCard

A card for selecting a question. -->

<script lang="ts">

import { userprefs, search } from "#scripts/stores";
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
  children?: any;
}

let { question, latex, desmos, style = "block", children }: Props = $props();


function check_valid(data: Array<any>): boolean
{
  return data && data.length > 0 && data[0];
}

</script>


<a class={["question-card", style, {
    effects: $search.effects,
    special: $search.show.difficulties && question.difficulty === "chaos",
    solved: $userprefs.solved.has(question.shard),
  }]}
  href="{base}/question/{question.topic}?shard={question.shard}"
>
  {#if $search.show.difficulties && question.difficulty}
    <div class="difficulty-indicator {question.difficulty}"
      title={question.difficulty.toUpperCase()}
      transition:fade={{ duration: 250 }}
    >
      {#if style === "row"}
        {question.difficulty.toUpperCase()}
      {/if}
    </div>
  {/if}

  {#if $search.show.question}
    <div class="question" transition:fade={{ duration: 250 }}>

      {#if latex}
        <Katex text={latex} inline={false} client_render={true} />
      {/if}

      {#if desmos}
        <Desmos blocks={desmos} bounds={question["graph-bounds"]} controls={false} ratio={1} />
      {/if}


      {#if question.topic === "guess-graph"}
        <Desmos
          blocks={question.desmos}
          options={{ showXAxis: true, showYAxis: true }}
          controls={false}
          bounds={question["graph-bounds"]}
          ratio={1}
        />
      {:else if question.topic === "cool-graphs"}
        <Desmos
          blocks={question.desmos}
          controls={false}
          bounds={question["graph-bounds"]}
          ratio={1}
        />
      {:else if question.topic === "addvent"}
        <!-- TODO decide what to show -->
      {:else}
        <Katex text={question.question?.content} inline={false} client_render={true} />
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

@use 'sass:color';


@property --col-left {
  syntax: '<color>';
  initial-value: $col-manifold;
  inherits: false;
}
@property --col-right {
  syntax: '<color>';
  initial-value: $col-chaos;
  inherits: false;
}

a.question-card {
  flex: 1 0 auto;
  min-width: 12em;
  padding: 0.75em;
  position: relative;
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
  background: light-dark(white, black);
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

a.question-card.effects {
  --col-left: #{$col-manifold};
  --col-right: #{$col-chaos};
  transition: all 0.12s ease-out;

  &:hover {
    transform: scale(103%);
  }
  &.row:hover {
    transform: scale(101.5%);
  }

  &.special {
    position: relative;
    border: none;
    border-radius: 0.4em;
    box-shadow: none;
    transform-style: preserve-3d;
    
    &::before {
      content: '';
      margin: -1.5px;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(130deg in oklch, var(--col-left), var(--col-right)) 0 0 / 100% no-repeat;
      border-radius: 0.5em;
      transform: translateZ(-1px);
      transition: --col-left 0.24s ease-out, --col-right 0.24s ease-out
    }
    
    &::after {
      content: '';
      position: absolute;
      inset: -1px;
      background: linear-gradient(130deg in oklch, var(--col-left), var(--col-right));
      opacity: 1;
      filter: blur(4px);
      transform: translateZ(-2px);
      transition: opacity 0.12s ease-out, inset 0.12s ease-out, --col-left 0.24s ease-out, --col-right 0.24s ease-out;
    }
  }

  &.special.solved::after {
    opacity: 0;
  }

  &.special:not(.solved) {
    &:hover::before, &:hover::after {
      --col-left: #{$col-chaos};
      --col-right: #{$col-based};
    }

    &:hover::after {
      inset: -3px;
    }
  }
}

.difficulty-indicator {
  $size: 0.65rem;
  height: $size;
  aspect-ratio: 1;
  position: absolute;
  top: 0.57rem;
  right: 0.6rem;
  z-index: 10;
  border-radius: calc($size / 2);
  transition: all 0.12s ease-out;

  &.based    { background: $col-based; }
  &.incline  { background: $col-incline; }
  &.manifold { background: $col-manifold; }
  &.chaos    { background: $col-chaos; }

  .question-card.row & {
    height: unset;
    aspect-ratio: unset;
    padding: 0.2em 0.5em;
    color: white;
    font-size: 90%;
    border-radius: 0.4rem;
  }

  .question-card:not(.row):hover & {
    border-radius: 0;
    transform: rotate(45deg);
  }
}

.question {
  min-height: 4rem;
  padding: 1rem;
  flex-grow: 1;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  font-size: 80%;
  a.question-card.row & { font-size: 100%; }
  text-align: center;
  overflow-x: hidden;
}

.info {
  padding: 1em 0.4em 0.4em;
  text-align: left;

  .question-card.block & {
    border-top: 1px solid $col-line-fallback;
    border-top: 1px solid $col-line;
  }

  .question-card.row & {
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
