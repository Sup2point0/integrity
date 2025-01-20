<!-- @component SelectSearch

A select input with a dropdown and search bar.
-->

<script lang="ts">

import * as fuzz from "fuzzball";

import Clicky from "#parts/ui/clicky.svelte";

import { base } from "$app/paths";


interface Props {
  text?: string;
  value: string | null;
  options?: string[];
  onselect?: (value: string | null) => void;
}

let {
  text,
  value = $bindable(),
  options = [],
  onselect = () => {},
}: Props = $props();


let open = $state(false);
let autofill = $derived.by(filter_suggestions)

function filter_suggestions(): string[]
{
  if (!value || !value.length) return options.slice(0, 12);
  
  return (
    fuzz.extract(value, options, {
      limit: Math.max(13 - value.length, 3),
    })
    .map(each => each[0])
  );
}

</script>


<div class="container">

  <search>
    <button class="select" class:open
      onkeydown={e => {
        if (e.key === "Enter" || e.key === " ") { open = !open; }
      }}
      onfocus={() => { open = true; }}
      onfocusout={() => { open = false; }}
      onmouseenter={() => { open = true; }}
      onmouseleave={() => { open = false; }}
    >
      <input type="search"
        bind:value
        placeholder={text ?? "load question"}
        onkeydown={e => {
          if (e.key === "Enter") onselect(value);
        }}
      />

      <img class="arrow" alt="/" src="{base}/arrow.svg" />
    </button>

    <Clicky action={() => onselect(value)}>
      Go
    </Clicky>
  </search>


  {#snippet select_option(val: string)}
    <li class="option" class:active={value === val}
      onclick={() => { value = val; }}
      onkeydown={e => {
        if (e.key === "Enter" || e.key === " ") { value = val; }
      }}
      tabindex={0}
    >
      {val}
    </li>
  {/snippet}

  <ul class="dropdown" class:open>
    {#each autofill as option}
      {@render select_option(option)}
    {/each}
  </ul>

</div>


<style lang="scss">

.container {
  width: 100%;
  display: block;
  position: relative;
}

search {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  column-gap: 0.5em;
}

button.select {
  padding: 0.5em 0.8em;
  background-color: light-dark(white, black);
  border: 1px solid $col-line;
  border-radius: 0.5em;
  box-shadow: 0 1.5px 2px -0.5px $col-line;

  @include interact(
    $hover: $col-clicky-hover,
    $click: $col-clicky-click,
    $t: 0.12,
  );
  @include focus-outline;

  &:hover {
    cursor: text;
  }

  img.arrow {
    max-width: 1em;
    opacity: 50%;
    transform: rotate(0deg);
    transition: transform 0.16s ease-out;
  }
  &.open img.arrow {
    transform: rotate(180deg);
  }
}

input[type = 'search'] {
  appearance: none;
  padding: 0.25em 0.5em;

  @include font-ui;
  color: $col-text;
  font-size: 100%;
  background: none;
  border: none;
  outline: none;
}


ul.dropdown {
  min-width: 8em;
  padding: 0.25em 0.5em 0.4em;
  margin-top: 1px;
  display: block;
  position: absolute;
  z-index: 15;
  visibility: hidden;
  opacity: 0;

  background-color: light-dark(white, black);
  border: 1px solid $col-line;
  border-radius: 0.5em;
  box-shadow: 0 2px 3px -0.5px $col-line;
  list-style: none;
  transform: translateY(-0.3em);
  transition:
    display 0.12s,
    visibility 0.12s,
    opacity 0.12s ease-out,
    transform 0.24s cubic-bezier(0.19, 1, 0.22, 1);  // ease-in exp

  &.open,
  button.select:is(:hover, :focus, :focus-within) ~ &,  // NOTE diff to `select-dropdown`, has :focus-within
  &:hover,
  &:has(li:focus)
  {
    visibility: visible;
    opacity: 1;
    transform: none;
    transition:
      opacity 0.16s ease-out,
      transform 0.24s cubic-bezier(0.19, 1, 0.22, 1);  // ease-out exp
  }
}

li {
  min-width: 4em;
  margin: 0.2em 0;
  padding: 0.4em 0.6em;
  @include font-ui;
  font-size: 90%;
  border-radius: 0.5em;
  
  @include interact();
  @include focus-outline;

  &.active {
    color: white;
    background-color: $col-prot;

    @include interact(
      $hover: color-mix(in oklch, $col-prot, black 8%),
      $click: color-mix(in oklch, $col-prot, black 16%),
    );
  }
}

</style>
