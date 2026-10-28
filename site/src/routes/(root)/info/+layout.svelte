<script lang="ts">

import type { Page } from "#scripts/types";

import PageContent from "#parts/base/static-page.svelte";

import { page } from "$app/state";

let { children } = $props();

</script>


<PageContent
	id={(page.data as Page).destination?.endsWith("faq") ? "faq" : undefined}
	parent_levels={[
		{ text: "Info", intern: "info" },
	]}
>
	{@render children?.()}
</PageContent>


<style lang="scss">

:global(article#faq h3) {
	margin-top: 1.5em;
	color: $col-deut;
}

</style>
