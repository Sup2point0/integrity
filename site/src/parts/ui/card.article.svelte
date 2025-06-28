<!-- @component ArticleCard

A card for selecting an article. -->

<script lang="ts">

import Site from "#scripts/site";

import type { Page } from "#scripts/types";

import { base } from "$app/paths";


interface Props {
  path?: string;
  page?: Page;
}

let { path, page }: Props = $props();

const data: Page = page ?? Site.pages[path!];

</script>


<a class="card" class:invalid={!data}
  href="{base}/{data?.dest}"
>
  <div class="info">
    <h4> {@html data?.head ?? "Page Unavailable"} </h4>
    
    {#if data?.capt}
      <p> {@html data.capt} </p>
    {/if}
  </div>
</a>


<style lang="scss">

a.card {
  width: 100%;
  min-width: 16em;
  min-height: 8em;
  padding: 0.75em;
  flex: 1 0 auto;
  display: flex;
  flex-flow: row;
  justify-content: start;
  align-items: stretch;
  
  @include font-ui;
  color: $col-text;
  text-decoration: none;
  background: auto;
  border: 1px solid $col-line;
  border-radius: 0.5em;
  box-shadow: 0 2px 2px -0.5px $col-line;

  @include interact(
    $hover: $col-card-hover,
    $click: $col-card-click,
    $t: 0.16,
  );
  @include focus-outline;

  &.invalid {
    pointer-events: none;
    opacity: 50%;
  }
}

.info {
  width: 100%;
  padding: 1em 0.4em 0.4em;
  text-align: left;

  h4 {
    width: 80%;
    padding: 0 0 0.5em;
    margin: 0 0 0.5em;
    font-size: 150%;
    font-weight: 350;
    border-bottom: 1px solid $col-line;
  }
}

</style>
