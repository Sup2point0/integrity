<!-- @component PageContent

The main displayed content for a static article page.
-->

<script lang="ts">

import Header        from "#parts/core/header.svelte";
import Meta          from "#parts/page/meta.svelte";
import Breadcrumbs   from "#parts/page/breadcrumbs.svelte";
import ArticleFooter from "#parts/page/footer.article.svelte";

import { page } from "$app/state";


interface Props {
  levels: Array<{
    text: string,
    intern?: string,
    link?: string,
  }>;
  id?: string;
}

let { levels, id = undefined }: Props = $props();


let { content, metadata: data } = $derived(page.data);

</script>


<Meta title={data.title} desc={data.desc} />


<Breadcrumbs levels={[
  ...levels,
  { text: data.title },
]} />

<Header page={data} />

<article {id}>
  {@render content?.()}

  <ArticleFooter page={data} />
</article>
