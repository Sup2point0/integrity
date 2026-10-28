<script>

import PageContent from "#parts/base/static-page.svelte";

let { children } = $props();

</script>


<PageContent parent_levels={[
	{ text: "Scriptures", intern: "scriptures" },
	{ text: "Integration", intern: "scriptures/integrals" },
	{ text: "Collections", intern: "scriptures/integrals/collections" },
]}>
	{@render children?.()}
</PageContent>

<p>
	<a href="int-int/int-int">Ooh, what’s this? ~o.0~</a>
</p>


<style lang="scss">

p {
	opacity: 1%;
}

</style>
