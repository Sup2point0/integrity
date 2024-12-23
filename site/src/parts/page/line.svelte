<!-- @component Line

A lovely horizontal line that fills up a specified width of its container.
-->

<script lang="ts">

interface Props {
  width?: string;
  margin?: string;
}

let {
  width = "100%",
  margin = "4rem",
}: Props = $props();

</script>


<div class="line"
  style:width
  style:margin
>
</div>


<style lang="scss">

.line {
  border-bottom: 1px solid $col-line;
}

</style>
