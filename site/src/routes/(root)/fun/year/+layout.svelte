<script lang="ts">

import type { Page } from "#scripts/types";

import { Breadcrumbs, Header } from "#parts/core";
import { Card, CardsContainer } from "#parts/ui";

import { page } from "$app/state";


let { children } = $props();

</script>


<Breadcrumbs levels={[
	{ text: "Fun", intern: "fun" },
	{ text: "0-100 Year Challenge", intern: "fun/year" },
	{ text: page.data.title ?? "" },
]} />

<Header page={page.data as Page} />


<CardsContainer>
	<Card title="2024"
		intern="fun/year/2024"
		latex={String.raw`\arcsin(2^0)/2 + 4!`}
	/>
	<Card title="2025"
		intern="fun/year/2025"
		latex={String.raw`2^{(0!+2)! + 5}`}
	/>
</CardsContainer>

<article>
	{@render children?.()}
</article>


<style lang="scss">

article {
	padding-top: 2rem;
}

</style>
