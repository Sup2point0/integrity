<!-- @component Link

A generic block-level link. -->

<script lang="ts">

import { base } from "$app/paths";


interface Props {
  text: string;
  link?: string;
  intern?: string;
  action?: () => void;
  disabled?: boolean;
}

let { text, link, intern, action, disabled = false }: Props = $props();

</script>


{#if action}
  <button class="link" class:disabled
    onclick={action}
  >
    {text}
  </button>

{:else}
  <a class="link" class:disabled
    href="{link || `${base}/${intern}`}"
  >
    {text}
  </a>

{/if}


<style lang="scss">

.link {
  padding: 0.5em;
  display: block;

  @include font-ui;
  font-weight: 300;
  font-size: 100%;
  color: $col-prot-fallback;
  color: $col-prot;
  background: none;
  text-decoration: none;
  text-align: left;
  border: none;
  border-radius: 0.5em;

  @include interact();
  @include focus-outline;

  &.disabled {
    opacity: 0.2;
  }
}

</style>
