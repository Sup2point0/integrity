<script lang="ts">

import PageContent from "#parts/base/static-page.svelte";


let { children } = $props();

</script>


<PageContent parent_levels={[
	{ text: "Desmos", intern: "desmos" },
	{ text: "Library", intern: "desmos/library" },
	{ text: "Rendering", intern: "desmos/library/rendering" },
]}>
	{@render children?.()}
</PageContent>
