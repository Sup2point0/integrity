<!-- @component InjectDesmos

Transform ```desmos``` blocks in an MDsveX body to Desmos embeds.
-->

<script lang="ts">

import { DesmosAPI } from "#parts/core";
import { Desmos } from "#parts/ui";

import { page } from "$app/state";
import { mount, onMount } from "svelte";


let { content } = $props();


let has_desmos = $state(false);

let root: HTMLElement;

onMount(() => {
  let sources = root.querySelectorAll("pre.language-desmos");

  for (let source of sources.values()) {
    has_desmos = true;
    source.style.display = "none";

    let desmos_container = source.parentNode.insertBefore(
      document.createElement("div"),
      source.nextSibling,
    );

    let blocks = (
      source.textContent
      .split("\n")
      .map(content => ({
        kind: "desmos",
        content,
      }))
    );

    mount(Desmos, {
      target: desmos_container,
      props: {
        options: { expressionsCollapsed: false },
        blocks,
        height: "69vh",
      },
    });
  }
});

</script>


{#if page.data.metadata.flags.includes("desmos") || has_desmos}
  <DesmosAPI />
{/if}

<div class="desmos-injector" bind:this={root}>
  {@render content?.()}
</div>
