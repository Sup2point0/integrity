<script lang="ts">

import type { Page } from "#scripts/types";

import Meta from "#parts/page/meta.svelte";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";

import { page } from "$app/state";


let data = $derived(page.data as Page);

</script>


<Meta title={data.title!} desc={data.desc!} />


<Breadcrumbs levels={[
  { text: "Desmos", intern: "desmos" },
  { text: "Library", intern: "desmos/library" },
  // @ts-ignore
  { text: data.category!, intern: `desmos/library/${data.category!.toLowerCase()}` },
  { text: data.title! },
]} />

<Header page={data} />

<article>
  {@render data.content()}
</article>
