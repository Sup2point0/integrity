<!-- @component PageContent

The content for a generic static article page.
-->

<script>

import Meta from "#parts/page/meta.svelte";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";

import { page } from "$app/state";


let { levels, id = undefined } = $props();

const { content, metadata: data } = page.data;

</script>


<Meta title={data.title} desc={data.desc} />


<Breadcrumbs levels={[
  ...levels,
  { text: data.title },
]} />

<Header page={data} />

<article {id}>
  {@render content()}
</article>
