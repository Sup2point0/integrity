<!-- @component Card

-->

<script lang="ts">

import Tag from "#parts/ui/tag.svelte";

import { base } from "$app/paths";


interface Props {
  intern: string;
  title: string;
  date: string;
  tags: string[];
}

let {
  title,
  date = "",
  tags = [],
  intern,
}: Props = $props();

</script>


<a class="card"
  href="{base}/{intern}"
>
  <div class="integral"></div>
  <div class="info">
    <h4> {title} </h4>
    <p> {date} </p>

    {#each tags as tag}
      <Tag shard={tag} />
    {/each}
  </div>
</a>


<style lang="scss">



</style>
