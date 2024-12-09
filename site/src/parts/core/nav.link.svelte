<!-- @component `NavLink`
 
A link in the navigation bar. Dropdown links can be provided via `Link` children.
-->

<script lang="ts">

import { base } from "$app/paths";


interface Props {
  text?: string;
  pict?: string;
  link?: string;
  intern?: string;
  collapse?: boolean;
  disabled?: boolean;
  children?: any;
}

let {
  text, pict, link, intern,
  collapse = false, disabled = false,
  children,
}: Props = $props();

</script>


<div class="nav-link" class:collapse class:disabled>
  <a href={link || `${base}/${intern}`}>
    {#if pict}
      <img alt={text ?? "?"} src="{base}/{pict}" />
    {/if}

    {#if text}
      <p> {text} </p>
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
  display: block;
  &:has(img) { padding: 0; }
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

  img {
    max-height: 2em;
  }
  
  p {
    @include font-ui;
    font-weight: 350;
    color: $col-text;
  }
}

.dropdown {
  min-width: 8em;
  margin-top: 0.5rem;
  padding: 0.5em;
  position: absolute;
  z-index: 50;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  visibility: hidden;
  opacity: 0;

  background-color: rgb(white, 60%);
  border-radius: 0.5em;
  backdrop-filter: blur(12px);
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
  
  .nav-link:not(.disabled):hover &, &:hover {
    display: flex;
    flex-direction: column;
    visibility: visible;
    opacity: 1;
    transform: none;
    transition:
      opacity 0.16s ease-out,
      transform 0.24s cubic-bezier(0.075, 0.82, 0.165, 1);  // ease-out circ
  }
}


@media (max-width: 50rem) {
  .nav-link.collapse {
    display: none;
  }
}

@media (max-width: 40rem) {
  .nav-link:has(img) p {
    display: none;
  }
}

</style>
