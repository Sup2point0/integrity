<script lang="ts">

import PageContent from "#parts/base/static-page.svelte";

let { children } = $props();

</script>


<PageContent parent_levels={[
	{ text: "Desmos", intern: "desmos" },
	{ text: "Docs", intern: "desmos/docs" },
]}>
	{@render children?.()}
</PageContent>
