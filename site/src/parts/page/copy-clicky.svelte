<!-- @component CopyClicky

A button to copy something to clipboard.
-->

<script lang="ts">

import { base } from "$app/paths";


interface Props {
  value?: string | null;
}

let { value }: Props = $props();


let copied = $state(false);

</script>


<button class="copy"
  onclick={() => {
    if (value) {
      navigator.clipboard.writeText(value);
      copied = true;
    }
  }}
>
  {#if copied}
    <img alt="" src="{base}/tick-new.svg" />
  {:else}
    <img alt="" src="{base}/copy.svg" />
  {/if}
</button>


<style lang="scss">

button.copy {
  padding: 0.5em;
  display: inline-block;
  background: none;
  border: none;
  border-radius: 0.5em;
  opacity: 40%;

  @include interact();
  @include focus-outline;
}

img {
  width: 1.5em;
  max-width: 100%;
}

</style>
