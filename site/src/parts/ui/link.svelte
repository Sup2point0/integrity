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
  hot?: boolean;
  dev?: boolean;
}

let {
  text,
  link,
  intern,
  action,
  disabled = false,
  hot = false,
  dev = false,
}: Props = $props();

</script>


{#snippet content()}
  {text}

  {#if hot}
    <span class="status hot">NEW</span>
  {/if}

  {#if dev}
    <span class="status dev">DEV</span>
  {/if}
{/snippet}


{#if action}
  <button class="link"
    onclick={action}
    disabled={disabled ?? undefined}
  >
    {@render content()}
  </button>

{:else}
  <a class="link"
    class:disabled
    href="{link || `${base}/${intern}`}"
  >
    {@render content()}
  </a>

{/if}


<style lang="scss">

.link {
  padding: 0.5em;
  display: block;
  position: relative;

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

  &.disabled, &[disabled] {
    pointer-events: none;
    opacity: 0.2;
  }
}

button.link {
  width: 100%;
}

.status {
  width: max-content;
  padding: 0.2em 0.4em;
  margin-left: 0.5em;
  color: white;
  font-size: 75%;
  border-radius: 0.5em;

  &.hot { background: $col-deut; }
  &.dev { background: $col-manifold; }
}


@media (prefers-contrast: more) {
  .link {
    color: $col-prot-contrast;
  }
}

</style>
