<!-- @component `<PageContent>`

The main displayed content for a static article page.
-->

<script lang="ts">

import type { url } from "#scripts/types";

import { Meta, Breadcrumbs, Header, InjectDesmos } from "#parts/core";
import { ArticleFooter, ArticleArray, PreReading } from "#parts/page";

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
