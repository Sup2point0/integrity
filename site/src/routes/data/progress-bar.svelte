<!-- @component ProgressBar

-->

<script lang="ts">

interface Props {
  value: number;
  total?: number;
}

let { value, total = 1 }: Props = $props();


let frac = $derived(value / total);

</script>


<div class="progress-bar">
  <div class="juice" style:width="{Math.round(100 * frac)}%"></div>
</div>


<style lang="scss">

.progress-bar {
  width: 100%;
  height: 1.5rem;
  background: $col-hover;
  transform: skew(-20deg);
}

.juice {
  height: 1.5rem;
  background: $col-prot;
  transition: width 0.1s ease-out;
}

</style>
