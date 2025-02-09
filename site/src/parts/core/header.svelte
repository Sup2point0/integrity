<!-- @component Header -->

<script lang="ts">

import ArticleBanners from "#parts/page/article-banners.svelte";


interface Props {
  title?: string;
  capt?: string;
  page?: object;
}

let { title, capt, page }: Props = $props();

</script>


<header>
  <div class="info">
    <h1> {title ?? page?.head ?? "Untitled Page"} </h1>
    <p> {@html capt ?? page?.capt ?? ""} </p>
  </div>

  {#if page}
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
  border-bottom: 1px solid #dedede;  // fallback
  border-bottom: 1px solid $col-line;
}

h1 {
  @include font-serif;
  font-size: 250%;
}

p {
  margin-top: 1em;
  @include font-ui;
  color: $col-text-deut;
  font-weight: 200;
}

</style>
