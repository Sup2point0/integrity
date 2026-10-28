<script>

let { children } = $props();

</script>


{@render children?.()}


<style lang="scss">

:global(a:has(.highlight--), a:has(.highlight--):is(:hover, :focus-visible, :active)) {
	color: inherit;
}

:global(a:has(.highlight--)::after) {
	display: none;
}

</style>
