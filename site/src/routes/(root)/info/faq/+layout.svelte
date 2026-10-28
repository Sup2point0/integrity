<script>

import PageContent from "#parts/base/static-page.svelte";

let { children } = $props();

</script>


<PageContent parent_levels={[
	{ text: "Info", intern: "info" }
]} id="faq">
	{@render children?.()}
</PageContent>


<style lang="scss">

:global(article#faq h3) {
	margin-top: 1.5em;
	color: $col-deut;
}

</style>
