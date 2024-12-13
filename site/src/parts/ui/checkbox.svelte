<!-- @component Checkbox

A checkbox button.
-->

<script lang="ts">

import { onMount } from "svelte";


interface Props {
  col: string;
  value: () => boolean;
  enable: () => boolean;
  disable: () => boolean;
  children: any;
}

let { col, value, enable, disable, children }: Props = $props();


let active = $state(false);

onMount(() => {
  active = value();
});

</script>


<button class="checkbox" class:active
  style:--col={col}
  onclick={e => {
    e.preventDefault();
    if (value()) {
      if (disable()) { active = false; }
    } else {
      if (enable()) { active = true; }
    }
  }}
>
  <div class="content">
    {@render children()}
  </div>
</button>


<style lang="scss">

button {
  width: 2.5em;
  height: 2.5em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  border-radius: 50%;

  @include interact(
    $col-clicky-click,
    $col-card-click,
  );
}

button.active {
  color: var(--col, $col-deut)
}

.content {
  max-width: 1em;
  aspect-ratio: 1;
}

</style>
