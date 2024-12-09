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
  flex-direction: row;
  justify-content: stretch;
  align-items: center;
  flex-wrap: nowrap;
  background-color: auto;
  border-bottom: 1px solid $col-line;
  @include interact($col-hover, $col-click);

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
