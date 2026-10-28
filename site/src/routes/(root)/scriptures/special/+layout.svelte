<script lang="ts">

import PageContent from "#parts/base/static-page.svelte";

let { children } = $props();

</script>


<PageContent parent_levels={[
	{ text: "Scriptures", intern: "scriptures" },
	{ text: "Special", intern: "scriptures/special" },
]}>
	{@render children?.()}
</PageContent>
