<script>

import PageContent from "#parts/base/static-page.svelte";

let { children } = $props();

</script>


<PageContent parent_levels={[
	{ text: "Docs", intern: "docs" }
]}>
	{@render children?.()}
</PageContent>


<style lang="scss">

:global(a:has(.highlight--), a:has(.highlight--):is(:hover, :focus-visible, :active)) {
	color: inherit;
}

:global(a:has(.highlight--)::after) {
	display: none;
}

</style>
