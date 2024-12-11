<!-- @component Select

A select dropdown input.
-->

<script lang="ts">

interface Props {
  options: string[] | {
    [key: string]: string;
  };
  value: any;
}

let { options, value = $bindable() }: Props = $props();

</script>


<select bind:value>
  {#each (
    Array.isArray(options) ? options.map(opt => [opt, opt]) : Object.entries(options)
  ) as [option, value]}
    <option {value}> {option} </option>
  {/each}
</select>


<style lang="scss">

select {
  appearance: none;
  padding: 0.4em 0.8em;
  @include font-ui;
  background-color: white;
  border: 1px solid $col-line;
  border-radius: 0.5em;
  box-shadow: 0 1.5px 2px -0.5px $col-line;

  @include interact(
    $hover: oklch(98% 0 0),
    $click: oklch(95% 0 0),
    $t: 0.12,
  );
}

</style>
