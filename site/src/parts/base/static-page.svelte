<!-- @component `<PageContent>`

The main displayed content for a static article page.
-->

<script lang="ts">

import type { Page, url } from "#scripts/types";

import { Breadcrumbs, Header, InjectDesmos } from "#parts/core";
import { ArticleFooter, ArticleArray, PreReading } from "#parts/page";

import { page } from "$app/state";
import type { Snippet } from "svelte";


interface Props {
	id?: string;
	parent_levels: Array<{
		text: string,
		intern?: url,
		link?: url,
	}>;
	children: Snippet;
}

let {
	id = undefined,
	parent_levels,
	children,
}: Props = $props();


let data = $derived(page.data as Page);

</script>


<Breadcrumbs levels={[
	...parent_levels,
	{ text: data.title ?? "" },
]} />

<Header page={data} />

{#if data.pre_reading}
	<PreReading paths={data.pre_reading} />
{/if}

<article {id}>
	<InjectDesmos>
		{@render children?.()}
	</InjectDesmos>

	{#if data.continue_reading}
		<aside>
			<h2> Continue Reading </h2>

			<ArticleArray paths={data.continue_reading} />
		</aside>
	{/if}

	<ArticleFooter page={data} />
</article>
