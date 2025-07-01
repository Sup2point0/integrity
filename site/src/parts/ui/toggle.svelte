<!-- @component Toggle
 
A clicky that binds to a variable and toggles it.
-->

<script lang="ts">

interface Props {
  text: string;
  kind?: "based" | "incline" | "manifold" | "chaos" | "unassigned";
  value: any;
  toggle: () => void;
}

let { text, kind = "unassigned", value, toggle }: Props = $props();

</script>


<button class="toggle {kind}"
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
    background: $col-prot-fallback;
    background: $col-prot;
    border: 1px solid $col-prot;
    box-shadow: none;
    
    @include interact(
      $hover: color-mix(in oklch, $col-prot, black 8%),
      $click: color-mix(in oklch, $col-prot, black 16%),
    );
    @include focus-outline;
    
    &.based {
      background: $col-based;
      border: 1px solid $col-based;
      @include interact(
        $hover: color-mix(in oklch, $col-based, black 8%),
        $click: color-mix(in oklch, $col-based, black 16%),
      );
    }

    &.incline {
      background: $col-incline;
      border: 1px solid $col-incline;
      @include interact(
        $hover: color-mix(in oklch, $col-incline, black 8%),
        $click: color-mix(in oklch, $col-incline, black 16%),
      );
    }

    &.manifold {
      background: $col-manifold;
      border: 1px solid $col-manifold;
      @include interact(
        $hover: color-mix(in oklch, $col-manifold, black 8%),
        $click: color-mix(in oklch, $col-manifold, black 16%),
      );
    }

    &.chaos {
      background: $col-chaos;
      border: 1px solid $col-chaos;
      @include interact(
        $hover: color-mix(in oklch, $col-chaos, black 8%),
        $click: color-mix(in oklch, $col-chaos, black 16%),
      );
    }
  }
  
  transition: all 0.12s ease-out;
}

</style>
