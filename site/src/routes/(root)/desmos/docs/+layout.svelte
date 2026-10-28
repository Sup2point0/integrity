<script lang="ts">

import type { Page } from "#scripts/types";

import { Breadcrumbs, Header } from "#parts/core";

import { page } from "$app/state";


let { children } = $props();

</script>


<Breadcrumbs levels={[
	{ text: "Desmos", intern: "desmos" },
	{ text: "Docs", intern: "desmos/docs" },
	{ text: page.data.title ?? "" },
]} />

<Header page={page.data as Page} />


<article>
	{@render children?.()}
</article>
