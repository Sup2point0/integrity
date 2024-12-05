<!-- @component Clicky -->

<script lang="ts">

import { base } from "$app/paths";


interface Props {
  text: string;
  link?: string;
  intern?: string;
  button?: () => void;
}

let { text, link, intern, button }: Props = $props();

</script>


{#if link}
  <a class="clicky"
    href={link || `${base}/${intern}`}
  >
    <button>
      {text}
    </button>
  </a>

  {:else}
  <button class="clicky"
    onclick={button}
  >
    {text}
  </button>

{/if}


<style lang="scss">

.clicky {
  padding: 0.4em 0.8em;
  @include font-ui;
  background: white;
  border: 1px solid $col-line;
  border-radius: 0.5em;
  box-shadow: 0 1.5px 2px -0.5px $col-line;

  @include interact(
    $hover: oklch(98% 0 0),
    $click: oklch(95% 0 0),
    $t: 0.12,
  );
}

</style>
