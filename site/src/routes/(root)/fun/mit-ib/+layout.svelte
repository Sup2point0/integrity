<script lang="ts">

import PageContent from "#parts/base/static-page.svelte";


let { children } = $props();

</script>


<PageContent parent_levels={[
	{ text: "Fun", intern: "fun" },
	{ text: "MIT Integration Bee", intern: "fun/mit-ib" },
]}>
	{@render children?.()}
</PageContent>
