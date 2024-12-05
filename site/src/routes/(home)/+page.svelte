<script lang="ts">

import Site from "#scripts/site";

import Button from "#src/parts/clicky.svelte";
import Card from "#parts/card.svelte";

</script>


<main>
  <Button text="testing" />
</main>

<!-- {#each Site.integrals as question}
  <Card
    intern={question.shard}
    title={question.title}
    date={question.date}
    tags={question.tags}
  />
{/each} -->


<style lang="scss">

main {
  text-align: center; 
}

</style>
