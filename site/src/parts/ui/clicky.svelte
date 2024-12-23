<!-- @component Clicky -->

<script lang="ts">

import { base } from "$app/paths";


interface Props {
  text?: string;
  pict?: string;
  link?: string;
  intern?: string;
  button?: () => void;
  children?: any;
}

let { text, pict, link, intern, button, children }: Props = $props();

</script>


{#snippet content()}
  {#if text}
    {text}
  {:else if pict}
    <img alt="" src="{base}/{pict}" />
  {:else}
    {@render children?.()}
  {/if}
{/snippet}


{#if button}
  <button class="clicky"
    onclick={button}
  >
    {@render content()}
  </button>

{:else}
  <a class="clicky" href={link || `${base}/${intern}`}>
    {@render content()}
  </a>

{/if}


<style lang="scss">

.clicky {
  width: max-content;
  padding: 0.4em 0.8em;
  display: block;
  @include font-ui;
  color: $col-text;
  text-decoration: none;
  background-color: light-dark(white, black);
  border: 1px solid $col-line;
  border-radius: 0.5em;
  box-shadow: 0 1.5px 2px -0.5px $col-line;

  @include interact(
    $hover: $col-clicky-hover,
    $click: $col-clicky-click,
    $t: 0.12,
  );
  @include focus-outline;
}

img {
  max-width: 100%;
}

</style>
