<script>
	import { mediaQuery } from 'svelte-legos';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import * as Drawer from '$lib/components/ui/drawer/index.js';
	import { Button } from '$lib/components/ui/button/index.js';

	let open = false;
	const isDesktop = mediaQuery('(min-width: 768px)');
	export let button = 'Open';
</script>

{#if $isDesktop}
	<Dialog.Root bind:open>
		<Dialog.Trigger asChild let:builder>
			<Button variant="outline" builders={[builder]}>{button}</Button>
		</Dialog.Trigger>
		<Dialog.Content class="sm:max-w-[425px]">
			<slot />
		</Dialog.Content>
	</Dialog.Root>
{:else}
	<Drawer.Root bind:open>
		<Drawer.Trigger asChild let:builder>
			<Button variant="outline" builders={[builder]}>{button}</Button>
		</Drawer.Trigger>
		<Drawer.Content>
			<slot />
		</Drawer.Content>
	</Drawer.Root>
{/if}
