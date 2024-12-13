<!-- @component Footer -->

<script lang="ts">

import Link from "#parts/ui/link.svelte";

import { base } from "$app/paths";

</script>


<footer>
  <div class="content">

    <div class="left">
      <img id="integrity-title"
        alt="integrity’"
        src="{base}/integrity-title.png" />

        <div class="quicklinks">
          <Link text="about" intern="info/synopsis" />
          <Link text="docs" link="docs" />
          <Link text="decoded" intern="info/decoded" />
          <Link text="privacy" intern="info/privacy" />
          <Link text="license" intern="info/license" />
        </div>
    </div>
  
    <div class="right">
      <a class="credits" href="https://github.com/Sup2point0">
        <div>
          <p> made with love by </p>
          <p id="sup2point0"> Sup#2.0 </p>
        </div>
  
        <img id="purple-portal"
          alt="Sup#2.0"
          src="https://sup2point0.github.io/purple-portal.png" />
      </a>

      <a class="credits" target="_blank" href="https://svelte.dev">
        <p> built with Svelte+Kit </p>
      </a>
    </div>

  </div>
</footer>


<style lang="scss">

footer {
  width: 100%;
  padding: 4rem 0 6rem;
  background-color: light-dark(oklch(99% 0 0), black);

  .content {
    width: 80%;
    max-width: 80rem;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    flex-wrap: wrap;
    gap: 2rem;
  }
}

.left { text-align: left; }
.right { text-align: right; }

.quicklinks {
  display: flex;
  flex-direction: row;
  gap: 0.25em;
}


a.credits {
  padding: 1em;
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
  color: $col-text;
  text-decoration: none;
  border-radius: 1em;

  @include interact($col-hover, $col-click);
  @include focus-outline;
}


img#integrity-title {
  max-width: 15vw;
  margin-bottom: 1rem;

  @media (max-width: 40rem) {
    max-width: 50vw;
  }
}

img#purple-portal {
  max-height: 4em;
  aspect-ratio: 1;
  transition: transform 0.5s ease-out;
}

p#sup2point0 {
  color: #3c8dbc;  // fallback
  color: $col-prot;
  font-size: 200%;
}

a.credits:hover img#purple-portal {
  transform: rotate(80deg);
}

</style>
