<script lang="ts">

import Site from "#scripts/site";

import Card from "#parts/card.svelte";

</script>


{#each Site.integrals as question}
  <Card
    intern={question.shard}
    title={question.title}
    date={question.date}
    tags={question.tags}
  />
{/each}


<style lang="scss">



</style>
