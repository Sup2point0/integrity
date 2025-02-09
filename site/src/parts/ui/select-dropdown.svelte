<!-- @component Select

A select dropdown input.
-->

<script lang="ts">

import { base } from "$app/paths";


interface Props {
  value: any;
  options: string[] | {
    [key: string]: any;
  };
}

let { value = $bindable(), options }: Props = $props();


let open = $state(false);
let selected_option = $derived(
  Array.isArray(options) ? value : (
    Object.entries(options).find(pair => (pair[1] === value))?.at(0) ?? ""
  )
);

</script>


<div class="container">
  <button class="select"
    onkeydown={e => {
      if (e.key === "Enter" || e.key === " ") { open = !open; }
    }}
    onfocus={() => { open = true; }}
    onfocusout={() => { open = false; }}
    onmouseenter={() => { open = true; }}
    onmouseleave={() => { open = false; }}
  >
    {selected_option}

    <img class="arrow" alt="/" src="{base}/arrow.svg"
      style:transform={open ? "rotate(180deg)" : "rotate(0deg)"}
    />
  </button>


  <ul class="dropdown" class:shown={open}>
    {#each (
      Array.isArray(options) ? options.map(opt => [opt, opt]) : Object.entries(options)
    ) as [option, value]}
      {@render select_option(option, value)}
    {/each}
  </ul>

  {#snippet select_option(text: string, val: string)}
    <li class="option" class:active={value === val}
      onclick={() => { value = val; }}
      onkeydown={e => {
        if (e.key === "Enter" || e.key === " ") { value = val; }
      }}
      tabindex={0}
    >
      {text}
    </li>
  {/snippet}
</div>


<style lang="scss">

.container {
  width: max-content;
  display: block;
  position: relative;
}

button.select {
  padding: 0.5em 0.8em;
  position: relative;

  @include font-ui;
  font-size: 90%;
  background-color: light-dark(white, black);
  border: 1px solid #dedede;  // fallback
  border: 1px solid $col-line;
  border-radius: 0.5em;
  box-shadow: 0 1.5px 2px -0.5px $col-line;

  @include interact(
    $hover: $col-clicky-hover,
    $click: $col-clicky-click,
    $t: 0.12,
  );
  @include focus-outline;

  img.arrow {
    max-width: 1em;
    opacity: 50%;
    transition: transform 0.16s ease-out;
  }
}


ul.dropdown {
  width: max-content;
  padding: 0.25em 0.5em 0.4em;
  margin-top: 1px;
  display: block;
  position: absolute;
  z-index: 15;
  visibility: hidden;
  opacity: 0;

  background-color: light-dark(white, black);
  border: 1px solid #dedede;  // fallback
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

  &.shown,
  button.select:is(:hover, :focus) ~ &,
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
  width: 100%;
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
