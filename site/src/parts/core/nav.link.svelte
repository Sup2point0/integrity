<!-- @component `NavLink`
 
A link in the navigation bar. Dropdown links can be provided via `Link` children.
-->

<script lang="ts">

import { base } from "$app/paths";


interface Props {
  text?: string;
  pict?: string;
    svg?: any;
  link?: string;
    intern?: string;
    extern?: string;
  collapse?: boolean;
  disabled?: boolean;
  hot?: boolean;
  children?: any;
}

let {
  text, pict, svg, link, intern, extern,
  collapse = false, disabled = false, hot = false,
  children,
}: Props = $props();

</script>


<div class="nav-link" class:collapse class:disabled>
  <a href={link || extern || `${base}/${intern}`}
    target={extern ? "_blank" : "_self"}
  >
    {#if svg}
      <div class="svg">
        {@render svg()}
      </div>
    {:else if pict}
      <img alt={text ?? "?"} src="{base}/{pict}" />
    {/if}

    {#if text}
      <p> {text} </p>

      {#if hot}
        <span class="hot">NEW</span>
      {/if}
    {/if}
  </a>

  {#if children}
    <div class="dropdown">
      {@render children()}
    </div>
  {/if}
</div>


<style lang="scss">

.nav-link {
  padding: 0.5em 0;
}

a {
  padding: 0.75em 0.75em;
  &:has(img) { padding: 0.5em; }
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-radius: 0.5em;

  .nav-link:not(.disabled) & {
    @include interact(
      $hover: $col-hover,
      $click: $col-click,
    );
    @include focus-outline;
  }

  .nav-link.disabled & {
    opacity: 0.2;
  }

  img, .svg {
    max-height: 1.25em;
  }
  
  p {
    @include font-ui;
    font-weight: 350;
    color: black;
    color: $col-text;
  }

  img ~ p, .svg ~ p {
    margin-left: 0.5em;
  }

  .hot {
    width: max-content;
    padding: 0.2em 0.4em;
    margin-left: 0.5em;
    color: white;
    font-size: 75%;
    background: $col-deut;
    border-radius: 0.5em;
  }
}

.dropdown {
  min-width: 8em;
  margin-top: 0.5rem;
  padding: 0.5em;
  position: absolute;
  z-index: 50;
  display: flex;
  flex-flow: column;
  gap: 0.2rem;
  visibility: hidden;
  opacity: 0;

  background: $col-nav-fallback;
  background: $col-nav;
  border-radius: 0.5em;
  backdrop-filter: blur(12px);
  box-shadow: 0 2px 2px $col-line-fallback;
  box-shadow: 0 2px 2px $col-line;
  transform: translateY(-0.4em);
  transition:
    visibility 0.12s,
    opacity 0.12s ease-out,
    transform 0.1s cubic-bezier(0.6, 0.04, 0.98, 0.335);  // ease-in circ

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    border-radius: 0.5em;
    backdrop-filter: blur(12px);
  }
  
  .nav-link:not(.disabled):hover &,
  &:hover {
    visibility: visible;
    opacity: 1;
    transform: none;
    transition:
      opacity 0.16s ease-out,
      transform 0.24s cubic-bezier(0.075, 0.82, 0.165, 1);  // ease-out circ
  }
}


@media (max-width: 50rem) {
  .nav-link:has(img, .svg) p {
    display: none;
  }
}

@media (max-width: 40rem) {
  .nav-link.collapse {
    display: none;
  }
}

</style>
