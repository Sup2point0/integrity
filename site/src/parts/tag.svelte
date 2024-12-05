<!-- @component Tag

-->

<script lang="ts">

import { base } from "$app/paths";


interface Props {
  shard: string;
}

let { shard }: Props = $props();

</script>


<a href="{base}/search?tag={shard}" class="tag">
  {shard.toUpperCase()}
</a>


<style lang="scss">

a {
  text-decoration: none;
}

</style>
