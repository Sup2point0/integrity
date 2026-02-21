<script lang="ts">

import { dyna_scriptures } from "#scripts/site";


import Header      from "#parts/core/header.svelte";
import Meta        from "#parts/page/meta.svelte";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Line        from "#parts/page/line.svelte";
import Link        from "#parts/ui/link.svelte";


const chapters = dyna_scriptures["desmos-gamedev"];

</script>


<Meta title="Polymap" />


<Breadcrumbs levels={[
  { text: "Desmos", intern: "desmos" },
  { text: "Game Development", intern: "desmos/gamedev" },
  { text: "Polymap" },
]} />

<Header title="Polymap"
  capt="Game Development in Desmos"
/>

<section>
  <header>
    <h2> PREREQUISITES </h2>
    <Line margin="0" />
  </header>

  <ul class="row">
    <li class="card">
      <div class="info">
        <h3> Essentials </h3>
        <p> The core features and capabilities of Desmos we’ll need for game development. </p>
      </div>

      <Line width="80%" margin="1.5rem 0.5rem" />

      <Link text="Graphs" intern="desmos/gamedev/essentials/graphs" />
      <Link text="Variables" intern="desmos/gamedev/essentials/variables" />
      <Link text="Lists" intern="desmos/gamedev/essentials/lists" />
      <Link text="Points" intern="desmos/gamedev/essentials/points" disabled={true} />
      <Link text="Functions" intern="desmos/gamedev/essentials/functions" disabled={true} />
      <Link text="Parametrics" intern="desmos/gamedev/essentials/parametrics" disabled={true} />
    </li>

    <li class="card">
      <div class="info">
        <h3> Supplementals </h3>
        <p> Other features of Desmos that are helpful to be familiar with. </p>
      </div>

      <Line width="80%" margin="1.5rem 0.5rem" />

      <Link text="Undefined" intern="desmos/gamedev/supplementary/" disabled={true} />
      <Link text="Sliders" intern="desmos/gamedev/supplementary/" disabled={true} />
      <Link text="Domains" intern="desmos/gamedev/supplementary/" disabled={true} />
      <Link text="Summations & Products" intern="desmos/gamedev/supplementary/" disabled={true} />
      <Link text="Recursion" intern="desmos/gamedev/supplementary/" disabled={true} />
      <Link text="Vectorisation" intern="desmos/gamedev/supplementary/vectorisation" />
    </li>
  </ul>
</section>

<section>
  <header>
    <h2> GAME DEVELOPMENT </h2>
    <Line margin="0" />
  </header>

  <ul class="row">
    <li class="card">
      <div class="info">
        <h3> Core </h3>
        <p> The foundations of game development in Desmos. </p>
      </div>

      <Line width="80%" margin="1.5rem 0.5rem" />
      
      <Link text="Actions" intern="desmos/gamedev/core/actions" />
      <Link text="Identifiers" intern="desmos/gamedev/core/identifiers" />
      <Link text="Ranges" intern="desmos/gamedev/core/ranges" />
      <Link text="List Comprehensions" intern="desmos/gamedev/core/list-comprehensions" />
      <Link text="Conditionals" intern="desmos/gamedev/core/conditionals" />
    </li>

    <li class="card">
      <div class="info">
        <h3> Architecture </h3>
        <p> Constructing the game to be modular, robust and flexible. </p>
      </div>

      <Line width="80%" margin="1.5rem 0.5rem" />

      {#each Object.values(chapters.architecture ?? []) as page}
        <Link
          text={page.title}
          intern="desmos/gamedev/{page.chapter.toLowerCase()}/{page.title.toLowerCase()}"
        />
      {/each}
    </li>

    <li class="card">
      <div class="info">
        <h3> Rendering </h3>
        <p> Coming soon! </p>
      </div>

      <Line width="80%" margin="1.5rem 0.5rem" />

      {#each Object.values(chapters.rendering ?? []) as page}
        <Link
          text={page.title}
          intern="desmos/gamedev/{page.chapter.toLowerCase()}/{page.title.toLowerCase()}"
        />
      {/each}
    </li>

    <li class="card">
      <div class="info">
        <h3> Advanced </h3>
        <p> Coming soon! </p>
      </div>

      <Line width="80%" margin="1.5rem 0.5rem" />
      
      <Link text="Inline Substitution" intern="desmos/gamedev/advanced/" disabled={true} />
      <Link text="Indexing Lists with Lists" intern="desmos/gamedev/advanced/" disabled={true} />
    </li>
  </ul>
</section>

<section>
  <header>
    <h2> EXTENSION </h2>
    <Line margin="0" />
  </header>

  <ul class="row">
    <li class="card">
      <div class="info">
        <h3> Extras </h3>
        <p> Coming soon! </p>
      </div>

      <Line width="80%" margin="1.5rem 0.5rem" />

      {#each Object.values(chapters.extras ?? []) as page}
        <Link
          text={page.title}
          intern="desmos/gamedev/{page.chapter.toLowerCase()}/{page.title.toLowerCase()}"
        />
      {/each}
    </li>

    <li class="card">
      <div class="info">
        <h3> Examples </h3>
        <p> Coming soon! </p>
      </div>

      <Line width="80%" margin="1.5rem 0.5rem" />

      {#each Object.values(chapters.examples ?? []) as page}
        <Link
          text={page.title}
          intern="desmos/gamedev/{page.chapter.toLowerCase()}/{page.title.toLowerCase()}"
        />
      {/each}
    </li>
  </ul>
</section>


<style lang="scss">

section {
  padding: 2rem;
}

header {
  padding-left: 0.5rem;
  padding-bottom: 2rem;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 1rem;

  h2 {
    display: flex;
    @include font-serif;
    font-size: 125%;
    color: $col-text-deut;
    white-space: pre;
  }
}

ul.row {
  display: grid;
  grid-template-columns: repeat(auto-fit, max(16rem, 40%));
  gap: 1rem;
  list-style-type: none;

  li.card {
    flex: 1 1 16rem;
    padding: 1.2rem 1rem 1.5rem;
    border-radius: 0.5em;
    box-shadow: 0 1px 4px $col-line;
  }
}

.info {
  padding: 0 0.5rem;

  h3 {
    padding-bottom: 0.5rem;
    font-size: 125%;
    font-weight: 450;
  }
}


@media (max-width: 50rem) {
  ul.row {
  grid-template-columns: repeat(auto-fit, 100%);
  }
}

</style>
