<script>
	import ScrollArea from '$lib/components/ui/scroll-area/scroll-area.svelte';
	import Footer from '$lib/modules/Footer.svelte';
	import { Undo2 } from 'lucide-svelte';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import './style.css';
</script>

<ScrollArea class="h-[100vh]">
	<div class="docs min-h-screen">
		<slot />
	</div>
	<Footer />
</ScrollArea>

<Tooltip.Root>
	<Tooltip.Trigger class="fixed top-8 left-8 md:top-2 md:left-2">
		<a href="/" class="bg-primary px-4 py-2 rounded-full flex">
			<Undo2 size="28" class="inline"/>
		</a>
	</Tooltip.Trigger>
	<Tooltip.Content>go back</Tooltip.Content>
</Tooltip.Root>
