<!-- @component Footer -->

<script lang="ts">

import { duality } from "#scripts/stores";

import { Duality } from "#scripts/types";

import Link from "#parts/ui/link.svelte";

import { base } from "$app/paths";

</script>


<footer>
  <div class="upper">

    <div class="left">
      <img id="integrity-title"
        alt="integrity’"
        src="{base}/integrity-title{$duality === Duality.DARK ? '-dark' : ''}.png"
      />

      <div class="quicklinks">
        <Link text="About" intern="info/synopsis" />
        <Link text="Explore" intern="explore" />
        <Link text="Docs" intern="docs" />
        <Link text="Scriptures" intern="scriptures" />
        <Link text="Privacy" intern="info/privacy" />
        <Link text="Licence" intern="info/licence" />
      </div>
    </div>
  
    <div class="right">
      <a class="credits" target="_blank" href="https://github.com/Sup2point0">
        <div>
          <p> made with love by </p>
          <p id="sup2point0"> Sup#2.0 </p>
        </div>
  
        <img id="purple-portal"
          alt="Sup#2.0"
          src="https://sup2point0.github.io/purple-portal.png"
        />
      </a>

      <div class="outlinks">
        <a target="_blank" href="https://github.com/Sup2point0/integrity">
          <p> View on GitHub <code>↗</code> </p>
        </a>

        <a target="_blank" href="https://github.com/Sup2point0/integrity/issues">
          <p> Request Feature <code>↗</code> </p>
        </a>

        <a target="_blank" href="https://github.com/Sup2point0/integrity/issues">
          <p> Report Issue <code>↗</code> </p>
        </a>
      </div>
    </div>

  </div>

  <div class="lower">
    <small>
      built with <a target="_blank" href="https://svelte.dev/">Svelte 5</a> + <a target="_blank" href="https://svelte.dev/docs/kit/introduction">SvelteKit</a> &ensp; · &ensp; hosted on <a target="_blank" href="https://pages.github.com/">GitHub Pages</a>
    </small>
  </div>
</footer>


<style lang="scss">

footer {
  width: 100%;
  padding: 3rem 0 2rem;
  background: light-dark(oklch(99% 0 0), black);
}


.upper {
  width: 80%;
  max-width: 80rem;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  align-items: start;
  gap: 2rem;
}

.left {
  img#integrity-title {
    min-width: 10rem;
    max-width: 15vw;
    padding: 1.5rem 0;

    @media (max-width: 40rem) {
      max-width: 50vw;
    }
  }

  .quicklinks {
    display: flex;
    flex-flow: row wrap;
    gap: 0.25em;
  }

  .outlinks code {
    @include font-code;
  }
}

.right {
  margin-left: auto;
  display: flex;
  flex-flow: column;
  align-items: end;
  text-align: right;

  a {
    width: max-content;
    padding: 1em;
    display: flex;
    flex-flow: row;
    column-gap: 1rem;
    color: $col-text;
    text-align: right;
    text-decoration: none;
    border-radius: 1em;

    @include interact();
    @include focus-outline;

    p {
      width: 100%;
      display: block;
    }

    &:hover img#purple-portal {
      transform: rotate(80deg);
    }
  }

  img#purple-portal {
    max-height: 4em;
    aspect-ratio: 1;
    transition: transform 2s cubic-bezier(0.19, 1, 0.22, 1);  // ease-out-exp
  }

  p#sup2point0 {
    padding-top: 0.2em;
    color: $col-prot-fallback;
    color: $col-prot;
    font-size: 200%;
  }

  .outlinks {
    display: flex;
    flex-flow: row-reverse wrap;

    a {
      padding: 0.5em 1em;
      font-size: 90%;
      border-radius: 0.5em;
      opacity: 40%;

      &:hover, &:focus, &:focus-visible {
        opacity: 100%;
      }
    }
  }
}


.lower {
  padding-top: 5rem;
  text-align: center;

  small {
    @include font-ui;
    font-size: 85%;
    color: $col-text-deut;

    a {
      @include underline-link;
    }
  }
}

</style>
