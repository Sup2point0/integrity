<!-- @component Meta

Abstraction for configuring page meta tags in `<head>`.
-->

<script lang="ts">

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

  {@render children?.()}
</svelte:head>
