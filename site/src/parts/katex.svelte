<!-- @component Katex

LaTeX rendered by KaTeX.
-->

<script lang="ts">

import katex from "katex";

import type { Latex } from "#scripts/types";


interface Props {
  text?: Latex;
  inline?: boolean;
}

let { text, inline = false }: Props = $props();


const opts = {
  displayMode: !inline,
  throwOnError: false,
}

let out = $derived(text && katex.renderToString(text, opts))

</script>


{@html out}
