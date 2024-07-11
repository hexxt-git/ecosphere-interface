<script>
	import { ScrollArea } from '$lib/components/ui/scroll-area';
	import Footer from '$lib/modules/Footer.svelte';
</script>

<ScrollArea class="h-[100vh]">
	<slot />
	<br /><br />
	<Footer />
</ScrollArea>
