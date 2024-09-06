<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	import Reveal from 'reveal.js';
	import Highlight from 'reveal.js/plugin/highlight/highlight';
	import Markdown from 'reveal.js/plugin/markdown/markdown';
	import Notes from 'reveal.js/plugin/notes/notes';

	import 'reveal.js/dist/reveal.css';
	import '$lib/slides/custom.css';
	import 'highlight.js/styles/base16/atelier-savanna.css'
	import Slides from '$lib/slides/Slides.svelte';
	import { redirect } from '@sveltejs/kit';

	onMount(() => {
		const deck = new Reveal({
			plugins: [Markdown, Highlight, Notes],
			autoAnimateEasing: 'ease',
			autoAnimateDuration: 1,
			hash: true,
			embedded: true, // This tells Reveal.js that it's embedded in another layout
			// controls: false,
			// progress: false
		});

		deck.initialize();
	});
</script>

<svelte:head>
	<style>
		/* Override any conflicting styles from the layout */
		body,
		html {
			height: 100%;
			margin: 0;
			padding: 0;
			overflow: hidden;
		}
		/* Ensure the Reveal.js presentation takes up the full viewport */
		:global(.reveal) {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	</style>
</svelte:head>

<Slides />
