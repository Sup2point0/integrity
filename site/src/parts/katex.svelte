<!-- @component Katex

LaTeX rendered by KaTeX. -->

<script lang="ts">

import katex from "katex";


interface Props {
  text: string;
  inline?: boolean;
}

let { text, inline = false }: Props = $props();


const opts = {
  displayMode: !inline,
  throwOnError: false,
}

let out = $derived(katex.renderToString(text, opts))

</script>


{@html out}
