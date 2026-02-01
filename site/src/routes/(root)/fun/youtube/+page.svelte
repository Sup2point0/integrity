<script lang="ts">

import Card from "#parts/ui/card.svelte";

import Header      from "#parts/core/header.svelte";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Meta        from "#parts/page/meta.svelte";
import RenderBlock from "#parts/page/render-block.svelte";

import { channels } from "./channels";

import { base } from "$app/paths";

</script>


<Meta title="Maths on YouTube"
  desc="Cool YouTube channels that make videos on maths"
/>


<Breadcrumbs levels={[
  { text: "Fun", intern: "fun" },
  { text: "Maths on YouTube" },
]} />

<Header title="Awesome Maths on YouTube"
  capt="Maths YouTube channels who I watch, and think you should too"
/>


<div>
  <div class="content">
    {#each channels as channel}
      <a target="_blank" href={channel.link}>
        <img class="icon" alt={channel.name} src="{base}/yt/{channel.icon}" />

        <div class="info">
          <h2> {channel.name} </h2>
          <p class="capt"> {channel.capt} </p>

          <RenderBlock source={channel.desc} />
        </div>
      </a>
    {/each}

    <aside>
      <p> Don’t know if I need to put this here, but I haven’t been endorsed by any of these channels or anything, I just think they’re really cool and want to let more people know about them :D </p>
    </aside>
  </div>
</div>


<style lang="scss">

.content {
  padding-top: 2rem;
  margin: auto;

  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  gap: 3rem;
}

a {
  padding: 2rem 2rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: start;
  align-items: center;
  gap: 2rem;

  color: unset;
  text-decoration: none;
  border: 1px solid $col-line-fallback;
  border: 1px solid $col-line;
  border-radius: 0.5em;
  box-shadow: 0 2px 2px -0.5px $col-line;
  transition: box-shadow 0.12s ease-out;

  @include interact(
    $hover: $col-card-hover,
    $click: $col-card-click,
    $t: 0.16,
  );
}

img {
  margin: 0 1rem;
  justify-self: center;
  width: 10rem;
  aspect-ratio: 1;
  border-radius: 50%;
}

.info {
  flex: 1 1;

  h2 {
    @include font-serif;
    font-weight: 300;
    font-size: 200%;
  }

  .capt {
    padding: 0.5em 0 1.5em;
    color: $col-text-deut;
  }
}

aside {
  p {
    max-width: 40em;
    margin: auto;
    color: $col-text-deut;
  }
}

</style>
