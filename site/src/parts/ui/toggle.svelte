<!-- @component Toggle
 
A clicky that binds to a variable and toggles it.
-->

<script lang="ts">

interface Props {
  text: string;
  value: any;
  toggle: () => void;
}

let { text, value, toggle }: Props = $props();

</script>


<button class="toggle"
  class:active={value}
  onclick={toggle}
>
  {text}
</button>


<style lang="scss">

.toggle {
  padding: 0.4em 0.8em;
  @include font-ui;
  color: $col-text;
  background-color: white;
  border: 1px solid $col-line;
  border-radius: 0.5em;
  box-shadow: 0 1.5px 2px -0.5px $col-line;

  @include interact(
    $hover: oklch(98% 0 0),
    $click: oklch(95% 0 0),
  );

  &.active {
    color: white;
    background-color: #3c8dbc;  // fallback
    background-color: $col-prot;
    box-shadow: none;
    
    @include interact(
      $hover: color-mix(in oklch, $col-prot, black 8%),
      $click: color-mix(in oklch, $col-prot, black 16%),
    );
  }
  
  transition: all 0.12s ease-out;
}

</style>
