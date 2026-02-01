<script lang="ts">

import Header         from "#parts/core/header.svelte";
import Meta           from "#parts/page/meta.svelte";
import Breadcrumbs    from "#parts/page/breadcrumbs.svelte";
import Card           from "#parts/ui/card.svelte";
import CardsContainer from "#parts/ui/container.cards.svelte";

</script>


<Meta title="Library" desc="Standard library of " />


<Breadcrumbs levels={[
  { text: "Desmos", intern: "desmos" },
  { text: "Library" }
]} />

<Header title="Library" />


<CardsContainer>
  <Card title="Functions"
    intern="desmos/library/functions"
    latex={String.raw`f_\text{activate}(s) = \{ s > 0 : 1, 0 \}`}
  />
  <Card title="Rendering"
    intern="desmos/library/rendering"
    latex={String.raw`d_\text{polygon}(6, (0, 0), 2, \pi/3)`}
  />
</CardsContainer>
