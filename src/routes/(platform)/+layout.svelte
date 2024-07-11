<script>
	import Nav from '$lib/modules/Nav.svelte';
	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';
	import MobileNav from '$lib/modules/MobileNav.svelte';
	import Footer from '$lib/modules/Footer.svelte';
</script>

<main>
	<Nav />
	<ScrollArea class="h-screen">
		<div style="min-height: calc(100vh - 64px);" class="pt-[64px]">
			<slot />
		</div>
		<br /><br />
		<Footer />
	</ScrollArea>
	<MobileNav />
</main>
