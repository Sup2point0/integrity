<!-- @component PageContent

The main displayed content for a static article page.
-->

<script lang="ts">

import type { url, filepath } from "#scripts/types";

import Header        from "#parts/core/header.svelte";
import InjectDesmos  from "#parts/core/inject-desmos.svelte";
import Meta          from "#parts/page/meta.svelte";
import Breadcrumbs   from "#parts/page/breadcrumbs.svelte";
import ArticleFooter from "#parts/page/footer.article.svelte";
import ArticleArray  from "#parts/page/article-array.svelte";
import PreReading    from "#parts/page/pre-reading.svelte";

import { page } from "$app/state";


// TODO upgrade Squarkdown to accept arbitrary parameters and extract pre_reading and continue_reading from there
interface Props {
  id?: string;
  levels: Array<{
    text: string,
    intern?: url,
    link?: url,
  }>;
  pre_reading?: filepath[];
  continue_reading?: filepath[];
}

let {
  id = undefined,
  levels,
  pre_reading,
  continue_reading,
}: Props = $props();


let { content, metadata: data } = $derived(page.data);

</script>


<Meta title={data.title} desc={data.desc} />


<Breadcrumbs levels={[
  ...levels,
  { text: data.title },
]} />

<Header page={data} />

{#if pre_reading}
  <PreReading paths={pre_reading} />
{/if}

<article {id}>
  <InjectDesmos {content} />

  {#if continue_reading}
    <aside>
      <h2> Continue Reading </h2>

      <ArticleArray paths={continue_reading} />
    </aside>
  {/if}

  <ArticleFooter page={data} />
</article>
