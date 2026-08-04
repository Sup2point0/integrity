<script lang="ts">

import { get_scriptures_of_topic } from "#scripts/site";
import { Topic } from "#scripts/types";

import { Breadcrumbs, Header, Meta } from "#parts/core";
import { Card } from "#parts/ui";

</script>


<Meta title="Completing the Square" />


<Breadcrumbs levels={[
  { text: "Scriptures", intern: "scriptures" },
  { text: "Completing the Square" }
]} />

<Header title="Completing the Square" />


<div class="browse">
  {#each get_scriptures_of_topic(Topic.COMPLETE_SQUARE) as page}
    <Card title={page.head}
      capt={page.desc}
      intern={page.dest}
      style="row"
    />
  {/each}
</div>


<style lang="scss">

.browse {
  margin: 1rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 1rem;
}

</style>
