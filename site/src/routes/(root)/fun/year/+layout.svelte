<script lang="ts">

import type { Page } from "#scripts/types";

import { Breadcrumbs, Header } from "#parts/core";

import { page } from "$app/state";


let { children } = $props();

</script>


<Breadcrumbs levels={[
	{ text: "Fun", intern: "fun" },
	{ text: "0-100 Year Challenge", intern: "fun/year" },
	{ text: page.data.title ?? "" },
]} />

<Header page={page.data as Page} />


<article>
	{@render children?.()}
</article>
