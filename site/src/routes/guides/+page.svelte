<script lang="ts">

import Site from "#scripts/site";

import Content from "../../../../guides/README.md";

import Card from "#parts/ui/card.svelte";
import Line from "#parts/page/line.svelte";

import Meta from "#parts/page/meta.svelte";
import Breadcrumbs from "#parts/page/breadcrumbs.svelte";
import Header from "#parts/core/header.svelte";

</script>


<Meta title="Guides" desc="Walkthroughs and showerthoughts on mathematics" />


<Breadcrumbs levels={[
  { text: "Integrity", link: Site.root },
  { text: "Guides" }
]} />

<Header title="Guides" />


<article>
  <Content />
</article>

<Line />

<section>
  <h2> Featured </h2>

  <div class="browse">
    <Card title="S-I+G-N Errors"
      capt="The “semicolon missing” of Mathematics"
      intern="guides/sign"
      style="row"
    />
  </div>
</section>

<section>
  <h2> Topics </h2>

  <div class="browse">
    <Card title="Integration"
      intern="guides/integrals"
      latex={"\\int f(x) \\, dx"}
    />
    <Card title="Completing the Square" intern="guides/complete-square" />
  </div>
</section>


<style lang="scss">

section {
  margin: 0 0 4rem;
  text-align: center;
}

.browse {
  margin: 1rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 1rem;
}


h2 {
  margin: 1em 0;
  padding: 0 0.1em 0.25em;
  @include font-serif;
  font-weight: 400;
  font-size: 200%;
}

</style>
