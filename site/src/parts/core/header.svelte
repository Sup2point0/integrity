<!-- @component Header -->

<script lang="ts">

import { userprefs } from "#scripts/stores";
import type { Page } from "#scripts/types";

import ArticleBanners from "#parts/page/article-banners.svelte";
import RenderBlock from "#parts/page/render-block.svelte";


interface Props {
  title?: string;
  capt?: string;
  page?: Page;
}

let { title, capt, page }: Props = $props();

</script>


<header class="{$userprefs.style}">
  <div class="info">
    <h1>
      <RenderBlock source={{ content: title ?? page?.head ?? "Untitled Page" }} />
    </h1>

    <div class="capt">
      <RenderBlock source={{ content: capt ?? page?.capt ?? "" }} />
    </div>
  </div>

  {#if page}
    {#if page.update_display}
      <p class="date"> Last updated <span>{page.update_display}</span> </p>
      <div style:height="1rem"></div>
    
    {:else if page.date_display}
      <p class="date"> Last updated <span>{page.date_display}</span> </p>
      <div style:height="1rem"></div>
    
    {:else}
      <div style:height="2rem"></div>
    {/if}

    <ArticleBanners {page} />
  {/if}
</header>


<style lang="scss">

header {
  width: 100%;
  margin-bottom: 2rem;
}

.info {
  padding: 2rem 0 2rem;
  text-align: center;
  border-bottom: 1px solid $col-line-fallback;
  border-bottom: 1px solid $col-line;

  h1 {
    @include font-serif;
    font-size: 250%;
  }

  .capt {
    margin-top: 1em;
    @include font-ui;
    color: $col-text-deut;
    font-weight: 200;
  }
}

p.date {
  margin-top: 1em;
  @include font-ui;
  color: $col-text-deut;
  font-weight: 200;
  text-align: right;

  span {
    color: $col-deut;
  }
}


@media (prefers-contrast: more) {
  p {
    color: $col-text-deut-contrast;
  }
}

header.tech h1 {
  font-family: 'Anta', system-ui, sans-serif;
  text-transform: uppercase;
}

</style>
