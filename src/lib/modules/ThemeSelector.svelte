<script>
	// @ts-nocheck
	import { setMode, mode } from 'mode-watcher';
	import * as Select from '$lib/components/ui/select/index.js';
	const themeOptions = [
		{ value: 'system', label: 'System' },
		{ value: 'light', label: 'Light' },
		{ value: 'dark', label: 'Dark' },
	];
	let selected = { value: $mode, label: ($mode?.at(0).toLocaleUpperCase() + $mode?.slice(1)) || 'Theme' };
	let className = '';
	export { className as class };
</script>

<Select.Root
	selected={$mode}
	onSelectedChange={(newMode) => {
		selected = newMode;
		setMode(newMode.value);
	}}
>
	<Select.Trigger class={className}>
		{selected.label}
	</Select.Trigger>
	<Select.Content>
		{#each themeOptions as option}
			<Select.Item {...option} />
		{/each}
	</Select.Content>
</Select.Root>
