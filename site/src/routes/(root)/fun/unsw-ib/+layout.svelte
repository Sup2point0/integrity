<script lang="ts">

import PageContent from "#parts/base/static-page.svelte";


let { children } = $props();

</script>


<PageContent parent_levels={[
	{ text: "Fun", intern: "fun" },
	{ text: "UNSW Integration Bee", intern: "fun/unsw-ib" },
]}>
	{@render children?.()}
</PageContent>
