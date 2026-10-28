<script>

import PageContent from "#parts/base/static-page.svelte";

let { children } = $props();

</script>


<PageContent parent_levels={[
	{ text: "Scriptures", intern: "scriptures" },
	{ text: "Completing the Square", intern: "scriptures/complete-square" },
]}>
	{@render children?.()}
</PageContent>
