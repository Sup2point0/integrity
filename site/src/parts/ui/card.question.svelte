<!-- @component QuestionCard

A card for selecting a question. -->

<script lang="ts">

import { userprefs, search } from "#scripts/stores";
import type { Latex, Question } from "#scripts/types";

import Tag from "#parts/ui/tag.svelte";
import Katex from "#parts/katex.svelte";
import Checkbox from "#parts/ui/checkbox.svelte";
import FlagIcon from "#parts/svg/flag.svelte";

import { fade } from "svelte/transition";
import { base } from "$app/paths";


interface Props {
  question: Question;
  latex?: Latex;
  style?: "block" | "row";
}

let { question, latex, style = "block" }: Props = $props();

</script>


<a class="question-card {style}"
  href="{base}/question/{question.topic}?shard={question.shard}"
>
  {#if search.show.question}
    <div class="question" transition:fade={{ duration: 250 }}>
      {#if latex}
        <Katex text={latex} inline={false} />
      {/if}
    </div>
  {/if}

  <div class="info">
    <div class="row">
      <div class="text">
        {#if question.title} <h4> {question.title} </h4> {/if}
        
        {#if search.show.dates && question.date}
          <p transition:fade={{ duration: 250 }}>
            {question.date_display}
          </p>
        {/if}
      </div>

      <div class="buttons">
        <Checkbox
          cols={{
            "off": "#dededede",
            "on": "#00761c",
          }}
          value={() => userprefs.flagged.has(question.shard)}
          enable={() => {
            try { userprefs.flagged.add(question.shard); }
            catch { return false; } return true; }}
          disable={() => {
            try { userprefs.flagged.delete(question.shard); }
            catch { return false; } return true; }}
        >
          <FlagIcon />
        </Checkbox>
      </div>
    </div>

    {#if search.show.tags && question.tags && question.tags.length > 0}
      <div class="tags"
        transition:fade={{ duration: 250 }}
      >
        {#each question.tags as tag}
          <Tag {tag} />
        {/each}
      </div>
    {/if}

    {#if search.show.methods && question.methods && question.methods.length > 0}
      <div class="tags"
        transition:fade={{ duration: 250 }}
      >
        {#each question.methods as tag}
          <Tag {tag} kind="deut" />
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
  justify-content: stretch;
  align-items: stretch;

  &.block {
    max-width: max(20vw, 20rem);
    flex-direction: column;
  }
  &.row {
    width: 100%;
    flex-direction: row-reverse;
    justify-content: end;
  }

  @include font-ui;
  color: $col-text;
  text-decoration: none;
  background-color: auto;
  border: 1px solid #dedede;  // fallback
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
  flex-direction: column;
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
    border-top: 1px solid #dedede;  // fallback
    border-top: 1px solid $col-line;
  }

  a.question-card.row & {
    min-width: 40%;
    flex: 0 1 auto;
    border-right: 1px solid #dedede;  // fallback
    border-right: 1px solid $col-line;
  }
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.text {
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
