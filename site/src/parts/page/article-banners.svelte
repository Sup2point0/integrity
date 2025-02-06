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
      This page is currently a <strong>work in progress</strong>, so some parts may be incomplete or unpresentable. Advance at your own peril...
    </Banner>
  {/if}

  {#if page.flags?.includes("devx")}
    <Banner title="Proof-Seeking, Roof-Sweeping">
      This article is constantly being added to. Watch out for additions (and subtractions)!
    </Banner>
  {/if}

  {#if page.flags?.includes("opin")}
    <Banner title="Objective Minima">
      This piece contains opinionated content, please do not feel obliged to agree.
    </Banner>
  {/if}

  {#if page.flags?.includes("simp")}
    <Banner title="Light Work">
      This article briefly covers a fairly basic or foundational concept for the sake of completeness. If you haven’t learnt it before, it’d probably be a good idea to find other resources online that cover it properly in-depth.
    </Banner>
  {/if}

  {#if page.flags?.includes("c")}
    <Banner title="Constantly Vanished">
      The +c constants of integration have been omitted in this article for brevity.
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

strong {
  font-weight: 450;
}

</style>
