<!-- @component Card

A generic card. -->

<script lang="ts">

import Katex from "#parts/katex.svelte";

import { base } from "$app/paths";


interface Props {
  title: string;
  intern?: string;
  latex?: string;
  pict?: string;
  style?: "block" | "row";
}

let { title, intern, latex, pict, style = "block" }: Props = $props();

</script>


<a class="card {style}"
  href="{base}/{intern}"
>
  <div class="preview">
    {#if pict}
      <img src="{base}/{pict}" />
    {:else if latex}
      <Katex text={latex} inline={false} />
    {:else}
    {/if}
  </div>

  <div class="info">
    <h4> {title} </h4>
  </div>
</a>


<style lang="scss">

a.card {
  min-width: 16em;
  min-height: 8em;
  padding: 0.75em;
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
  
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
  @include focus-outline;

  &.block {
    max-width: 20vw;
  }
  &.row {
    width: 100%;
  }
}

.preview {
  min-height: 4em;
  padding: 1rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  img {
    max-width: 100%;
  }

  :global(.katex) {
    font-size: 150%;
  }
}

.info {
  padding: 1em 0.4em 0.4em;
  text-align: center;
  border-top: 1px solid $col-line;

  h4 {
    font-size: 150%;
    font-weight: 350;
  }
}

</style>
