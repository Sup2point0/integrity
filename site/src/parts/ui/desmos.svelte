<!-- @component `<Desmos>`

An embedded Desmos window that handles initialisation when the element scrolls into view.
-->

<script lang="ts">

import { compile } from "desmost";

import type { int } from "#scripts/types";

import { onMount } from "svelte";


interface Props {
	source?:   string;
	options?:  object;  // FIXME rename to config
	controls?: boolean;
	height?:   string;
	ratio?:    number;
	bounds?:   number | {
		left?: number, right?: number, bottom?: number, top?: number,
	};
	no_delay?: boolean;
}

let {
	source,
	options = {},
	controls = true,
	height = "auto",
	ratio,
	bounds = controls ? undefined : 2,
	no_delay = false,
}: Props = $props();


// svelte-ignore state_referenced_locally
let config = {
	expressions: controls, expressionsCollapsed: true,
	graphPaper: false,
	keypad: false,
	lockViewport: !controls, zoomButtons: controls,
	settingsMenu: controls,
	showGrid: controls,
	showXAxis: controls, showYAxis: controls,
	xAxisNumbers: controls, yAxisNumbers: controls,
};

Object.assign(config, options);


let el_desmos: HTMLElement;
let desmos: Desmos.Calculator;

/** Are we still trying to load the Desmos embed? */
let is_loading: boolean = $state(true);

/** Starts as `undefined`, set to `null` if the embed loads successfully. */
let error_message: string | null | undefined = $state(undefined);


onMount(() =>
{
	let delay: number;
	let timeout: number;
	let observer: IntersectionObserver;

	/* NOTE: Waiting a little before trying to load the Desmos embed is more reliable */
	delay = setTimeout(
		() => {
			observer = new IntersectionObserver(([entry]) => {
				if (!entry.isIntersecting) return;

				if (is_loading || error_message !== undefined) {
					timeout = try_load_desmos();
					if (timeout === 0) {
						observer.disconnect();
					}
				}
			});
			observer.observe(el_desmos);
		},
		no_delay ? 0 : 500
	);

	return () => {
		clearTimeout(delay);
		observer.disconnect();
	}
});


function try_load_desmos(tries: int = 0): int
{
	if (tries > 3) {
		error_message = `Failed to load after ${tries} retries`;
		return 0;
	}

	try {
		load_desmos();
		error_message = undefined;
		is_loading = false;
		
		return 0;
	}
	catch (e) {
		if (e instanceof Error) error_message = e.message;

		tries++;
		console.error(`Failed to load Desmos embed, retrying in ${tries} seconds...`);

		return setTimeout(() => try_load_desmos(tries), tries * 1000);
	}
}

function load_desmos()
{
	if (typeof Desmos === "undefined") {
		throw new Error(`Could not access Desmos API. Try checking your internet connection?`);
	}

	desmos = Desmos.GraphingCalculator(el_desmos, config);

	if (typeof bounds === "number") {
		desmos.setMathBounds({
			left: -bounds, right: bounds,
			bottom: -bounds, top: bounds,
		});
	} else if (bounds != undefined) {
		desmos.setMathBounds(bounds);
	}

	if (source != undefined) {
		compile(desmos, source);
	}
}

</script>


<div class="desmos"
	style:width={ratio ? "auto" : "100%"}
	style:height={height}
	style:aspect-ratio={ratio}
>
	<div class="embed"
		class:live={!is_loading}
		bind:this={el_desmos}
	></div>

	<div class="status">
		{#if is_loading}
			<p> Loading Desmos embed... </p>

		{:else if desmos == undefined}
			<p> Error loading Desmos embed =( </p>
			{#if error_message}
				<p> {@html error_message} </p>
			{/if}
		
		{/if}
	</div>
</div>


<style lang="scss">

.desmos {
	min-width: 12rem;
	max-width: 100%;
	min-height: 6rem;
	max-height: 100vh;
	position: relative;
}

.embed {
	width: 100%;
	height: 100%;
	background: light-dark(rgb(black, 2%), rgb(white, 10%));
	opacity: 0;
	transition: opacity 0.24s ease-out 0.05s;

	&.live {
		opacity: 1;
	}
}

.status {
	color: $col-text-deut;
	position: absolute;
	top: 50%;
	left: 50%;
	text-align: center;
	transform: translateX(-50%) translateY(-50%);

	p {
		margin: 1em 0;
	}
}

</style>
