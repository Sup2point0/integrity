<!-- @component Checkbox

A checkbox button.
-->

<script lang="ts">

import { onMount } from "svelte";


interface Props {
  cols: {
    off: string;
    on: string;
  };
  value: () => boolean;
  enable: () => boolean;
  disable: () => boolean;
  children: any;
}

let { cols, value, enable, disable, children }: Props = $props();


let active = $state(false);

onMount(() => {
  active = value();
});

</script>


<button class="checkbox" class:active
  style:--col-off={cols.off}
  style:--col-on={cols.on}
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
  width: 100%;
  max-width: 2.5em;
  // height: 2.5em;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--col-off, $col-clicky-click);
  background: none;
  border: none;
  border-radius: 50%;

  @include interact(
    $col-clicky-click,
    $col-card-click,
  );
  @include focus-outline;

  transition: all 0.1s ease-out;

  &:hover, &:active {
    color: var(--col-on, $col-deut);
  }

  &:active {
    filter: brightness(88%);
    transform: scale(92%);
  }
}

button.active {
  color: var(--col-on, $col-deut)
}

.content {
  width: inherit;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1;
}

</style>
