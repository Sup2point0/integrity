<!-- @component Section

A collapsible section.
-->

<script lang="ts">

import { fade } from "svelte/transition";
import { base } from "$app/paths";


interface Props {
  ctx?: "outer" | "inner";
  closed?: boolean;
  title: string;
  children?: any;
}

let {
  ctx = "outer",
  closed = true,
  title,
  children,
}: Props = $props();


let open = $state(!closed);

</script>


<section class={ctx}>
  <div class="row"
    onclick={() => { open = !open; }}
    onkeydown={e => { if (e.key.toLowerCase() === "space") open = !open; }}
    tabindex={0}
    role="button"
  >
    {#if ctx === "outer"}
      <h2> {title} </h2>
    {:else}
      <h3> {title} </h3>
    {/if}

    <img class="arrow" alt="/" src="{base}/arrow.svg"
      style:transform={open ? "rotate(180deg)" : "rotate(0deg)"}
    />
  </div>

  {#if open}
    <div class="content"
      transition:fade={{ duration: 250 }}
    >
      {@render children?.()}
    </div>
  {/if}
</section>


<style lang="scss">

section {
  position: relative;
  
  &.outer {
    margin: 1.5rem 0 0;
  }

  &.inner {
    margin: 0 0 1rem;
  }
}

.row {
  padding: 0.5em 1em;
  display: flex;
  flex-flow: row nowrap;
  justify-content: stretch;
  align-items: center;
  background: auto;
  border-bottom: 1px solid $col-line-fallback;
  border-bottom: 1px solid $col-line;
  @include interact();

  &:hover {
    border-color: $col-prot;
  }

  img.arrow {
    max-width: 1em;
    opacity: 50%;
    transition: transform 0.16s ease-out;
  }
}

h2 {
  flex-grow: 1;
  font-weight: 400;
  font-size: 150%;
}

h3 {
  flex-grow: 1;
  font-weight: 300;
  font-size: 125%;
}

.content {
  padding: 1.5rem 1rem 0.5rem;
}

</style>
