<script>
	import { cn } from '$lib/utils.js';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { Download, Maximize, Share2 } from 'lucide-svelte';
	let className = undefined;
	export let alt = undefined;
	export let src = undefined;
	export { className as class };
	import * as Dialog from '$lib/components/ui/dialog';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<div class="relative w-fit mx-auto">
	<img
		class={cn('shadow-sm', className)}
		{src}
		{alt}
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
		on:wheel|passive
		{...$$restProps}
	/>

	<div class="absolute bottom-2 right-3 flex gap-2">
		<script lang="ts">
		</script>

		<DropdownMenu.Root>
			<DropdownMenu.Trigger>
				<Tooltip.Root>
					<Tooltip.Trigger>
						<button class="bg-card border  p-2 rounded-md"><Share2 size="18" /></button>
					</Tooltip.Trigger>
					<Tooltip.Content class="px-4">share</Tooltip.Content>
				</Tooltip.Root>
			</DropdownMenu.Trigger>
			<DropdownMenu.Content>
				<DropdownMenu.Group>
					<DropdownMenu.Label>Share</DropdownMenu.Label>
					<DropdownMenu.Separator />
					<DropdownMenu.Item>Copy link</DropdownMenu.Item>
					<DropdownMenu.Item>Facebook</DropdownMenu.Item>
					<DropdownMenu.Item>Twitter</DropdownMenu.Item>
					<DropdownMenu.Item>Email</DropdownMenu.Item>
				</DropdownMenu.Group>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
		
		<Dialog.Root>
			<Dialog.Trigger>
				<Tooltip.Root>
					<Tooltip.Trigger>
						<button class="bg-card border  p-2 rounded-md"><Maximize size="18" /></button>
					</Tooltip.Trigger>
					<Tooltip.Content class="px-4">maximize</Tooltip.Content>
				</Tooltip.Root>
			</Dialog.Trigger>
			<Dialog.Content class="rounded-3xl max-w-[90vw] max-h-[90vh] p-10 flex">
				<img {src} class="rounded-xl" alt="" />
				<div class="flex gap-2 absolute bottom-12 right-14">
					<a class="bg-card border  p-2 rounded-md" href={src} download>
						<Download />
					</a>
				</div>
			</Dialog.Content>
		</Dialog.Root>
	</div>
</div>
