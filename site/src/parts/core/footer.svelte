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
          <Link text="About" intern="info/synopsis" />
          <Link text="Explore" intern="explore" />
          <Link text="Docs" intern="docs" />
          <Link text="Guides" intern="guides" />
          <Link text="Privacy" intern="info/privacy" />
          <Link text="License" intern="info/license" />
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
          src="https://sup2point0.github.io/purple-portal.png"
        />
      </a>

      <a class="credits" target="_blank" href="https://github.com/Sup2point0/integrity">
        <p> View on GitHub </p>
      </a>
    </div>

  </div>

  <small class="centre">
    built with <a target="_blank" href="https://svelte.dev/">Svelte 5</a> + <a target="_blank" href="https://svelte.dev/docs/kit/introduction">SvelteKit</a> &ensp; · &ensp; hosted on <a target="_blank" href="https://pages.github.com/">GitHub Pages</a>
  </small>
</footer>


<style lang="scss">

footer {
  width: 100%;
  padding: 4rem 0 2rem;
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

.quicklinks {
  display: flex;
  flex-direction: row;
  gap: 0.25em;
}

small {
  margin-top: 4rem;
  display: block;
  @include font-ui;
  font-size: 75%;
  color: $col-text-deut;

  a {
    @include underline-link;
  }
}


.left {
  text-align: left;
}
.right {
  display: flex;
  flex-direction: column;
  align-items: end;
  text-align: right;
}
.centre {
  text-align: center;
}


a.credits {
  width: max-content;
  padding: 1em;
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
  color: $col-text;
  text-align: right;
  text-decoration: none;
  border-radius: 1em;

  @include interact($col-hover, $col-click);
  @include focus-outline;

  p {
    width: 100%;
    display: block;
  }

  &:hover img#purple-portal {
    transform: rotate(80deg);
  }
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
  padding-top: 0.2em;
  color: #3c8dbc;  // fallback
  color: $col-prot;
  font-size: 200%;
}

</style>
