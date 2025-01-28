<!-- @component Meta

Abstraction for configuring page meta tags in `<head>`.
-->

<script lang="ts">

import { base } from "$app/paths";


interface Props {
  title?: string;
  desc?: string;
  children?: any;
}

let { title, desc, children }: Props = $props();

</script>


<svelte:head>
  <title> {title} · Integrity </title>
  <meta name="description" content="{desc}" />

  <meta property="og:site_name" content="Integrity" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="{title} · Integrity" />
  <meta property="og:description" content={desc} />
  <meta property="og:image" content="{base}/previews/integrity-og.png" />

  {@render children?.()}
</svelte:head>
