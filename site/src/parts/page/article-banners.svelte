<!-- @component ArticleBanners

Handles displaying banners at the top of an article page.
-->

<script>

import Banner from "#parts/page/banner.svelte";


let { page } = $props();

</script>


<section class="banners">
  {#if page.flags?.includes("dev")}
    <Banner title="Unerased Construction Lines">
      This page is currently a <span>work in progress</span>, so some parts may be incomplete or unpresentable. Advance at your own peril...
    </Banner>
  {/if}

  {#if page.flags?.includes("opin")}
    <Banner title="Objectivity">
      This piece contains opinionated content, please do not feel obliged to agree.
    </Banner>
  {/if}
</section>


<style lang="scss">

section.banners {
  margin: 2rem 0;
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;
}

</style>
