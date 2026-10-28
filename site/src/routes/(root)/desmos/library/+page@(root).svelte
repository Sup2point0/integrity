<script lang="ts">

import { Meta, Breadcrumbs, Header } from "#parts/core";
import { Card, CardsContainer } from "#parts/ui";

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
