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
  font-size: 90%;
  color: $col-text;
  background: light-dark(white, black);
  border: 1px solid $col-line;
  border-radius: 0.5em;
  box-shadow: 0 1.5px 2px -0.5px $col-line;

  @include interact(
    $hover: $col-clicky-hover,
    $click: $col-clicky-click,
  );

  &.active {
    color: white;
    background: #3c8dbc;  // fallback
    background: $col-prot;
    border: 1px solid $col-prot;
    box-shadow: none;
    
    @include interact(
      $hover: color-mix(in oklch, $col-prot, black 8%),
      $click: color-mix(in oklch, $col-prot, black 16%),
    );
    @include focus-outline;
  }
  
  transition: all 0.12s ease-out;
}

</style>
