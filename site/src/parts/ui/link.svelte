<!-- @component Link

A generic block-level link. -->

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


{#if button}
  <button class="link"
    onclick={button}
  >
    {text}
  </button>

{:else}
  <a class="link"
    href="{link || `${base}/${intern}`}"
  >
    {text}
  </a>

{/if}


<style lang="scss">

.link {
  padding: 0.5em;

  @include font-ui;
  font-weight: 300;
  font-size: 100%;
  color: #3c8dbc;  // fallback
  color: $col-prot;
  background: none;
  text-decoration: none;
  text-align: left;
  border: none;
  border-radius: 0.5em;

  @include interact($col-hover, $col-click);
  @include focus-outline;
}

</style>
