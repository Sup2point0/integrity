<script lang="ts">

import Content from "./~content.svx";
import { metadata as page } from "./~content.svx";

import { Meta, Breadcrumbs, Header } from "#parts/core";
import { Card, CardsContainer } from "#parts/ui";

</script>


<Meta title={page.title} desc={page.desc} />


<Breadcrumbs levels={[
	{ text: "Fun", intern: "fun" },
	{ text: "0–100 Year Challenge"}
]} />

<Header {page} />


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
	<Content />
</article>


<style lang="scss">

article {
	padding-top: 2rem;
}

</style>
