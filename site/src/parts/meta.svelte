<!-- @component Meta

Abstraction for configuring page meta tags in `<head>`.
-->

<script lang="ts">

interface Props {
  title?: string;
  desc?: string;
}

let { title, desc }: Props = $props();

</script>


<svelte:head>
  <title> {title} · Integrity </title>
  <meta name="description" content="{desc}" />
</svelte:head>
