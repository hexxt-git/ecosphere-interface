<script>
	// @ts-nocheck

	import { cn } from '$lib/utils.js';
	let className = undefined;
	export let value = undefined;
	export { className as class };
	export let readonly = undefined;
	export let rows = undefined;
	export let cols = undefined;
</script>

<textarea
	class={cn(
		'flex w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-background file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
		className
	)}
	bind:value
	{readonly}
	{rows}
	{cols}
	on:blur
	on:change
	on:click
	on:focus
	on:focusin
	on:focusout
	on:keydown
	on:keypress
	on:keyup
	on:mouseover
	on:mouseenter
	on:mouseleave
	on:mousemove
	on:paste
	on:input
	on:wheel|passive
	{...$$restProps}
/>
