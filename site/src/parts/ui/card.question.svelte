<!-- @component QuestionCard

A card for selecting a question. -->

<script lang="ts">

import Tag from "#parts/ui/tag.svelte";

import { base } from "$app/paths";


interface Props {
  title: string;
  intern?: string;
  question?: string;
  date?: string;
  tags?: string[];
}

let { title, intern, question, date, tags }: Props = $props();

</script>


<a class="question-card"
  href="{base}/{intern}"
>
  <div class="question">
    {#if question}
      {@html question}
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
  max-width: 20vw;
  padding: 0.75em;
  display: block;
  @include font-ui;
  color: $col-text;
  text-decoration: none;
  background: white;
  border: 1px solid $col-line;
  border-radius: 0.5em;
  box-shadow: 0 2px 2px -0.5px $col-line;

  @include interact(
    $hover: oklch(99% 0 0),
    $click: oklch(96% 0 0),
    $t: 0.16,
  );
}

.question {
  min-height: 4rem;
}

.info {
  padding: 0.4em;
  text-align: left;
  border-top: 1px solid $col-line;

  h4 {
    font-size: 125%;
    font-weight: 450;
  }

  p {
    font-size: 100%;
    font-weight: 250;
  }
}

.tags {
  display: flex;
  justify-content: start;
  align-items: start;
  flex-wrap: wrap;
  column-gap: 0.25em;
  row-gap: 0.2em;
}

</style>
