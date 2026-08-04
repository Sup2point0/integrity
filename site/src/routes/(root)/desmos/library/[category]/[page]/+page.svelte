<script lang="ts">

import type { Page } from "#scripts/types";

import { Meta, Breadcrumbs, Header } from "#parts/core";
import { ArticleFooter } from "#parts/page";

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

  <ArticleFooter page={data} />
</article>
