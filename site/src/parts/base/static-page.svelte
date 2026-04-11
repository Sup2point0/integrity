<!-- @component PageContent

The main displayed content for a static article page.
-->

<script lang="ts">

import type { url } from "#scripts/types";

import Header        from "#parts/core/header.svelte";
import InjectDesmos  from "#parts/core/inject-desmos.svelte";
import Meta          from "#parts/page/meta.svelte";
import Breadcrumbs   from "#parts/page/breadcrumbs.svelte";
import ArticleFooter from "#parts/page/footer.article.svelte";
import ArticleArray  from "#parts/page/article-array.svelte";
import PreReading    from "#parts/page/pre-reading.svelte";

import { page } from "$app/state";


interface Props {
  id?: string;
  levels: Array<{
    text: string,
    intern?: url,
    link?: url,
  }>;
}

let {
  id = undefined,
  levels,
}: Props = $props();


let { content, metadata: data } = $derived(page.data);

</script>


<Meta title={data.title} desc={data.desc} />


<Breadcrumbs levels={[
  ...levels,
  { text: data.title },
]} />

<Header page={data} />

{#if data.rest.pre_reading}
  <PreReading paths={data.rest.pre_reading} />
{/if}

<article {id}>
  <InjectDesmos {content} />

  {#if data.rest.continue_reading}
    <aside>
      <h2> Continue Reading </h2>

      <ArticleArray paths={data.rest.continue_reading} />
    </aside>
  {/if}

  <ArticleFooter page={data} />
</article>
