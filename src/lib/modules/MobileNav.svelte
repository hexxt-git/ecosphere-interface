<script>
	import { page } from '$app/stores';
	import { Calendar, House, MessageCircle } from 'lucide-svelte';
</script>

<nav class="items-center justify-evenly fixed bottom-0 left-0 w-full h-16 pb-2 border-t border-t-border hidden mobile:flex z-10 bg-background">
	<a href="/feed">
		<House class="w-7 h-7 {$page.url.pathname.match(/feed/)?.length ? '' : 'opacity-70'}" />
	</a>
	<a href="/chat">
		<MessageCircle class="w-7 h-7 {$page.url.pathname.match(/chat/)?.length ? '' : 'opacity-70'}" />
	</a>
	<a href="/events">
		<Calendar class="w-7 h-7 {$page.url.pathname.match(/events/)?.length ? '' : 'opacity-70'}" />
	</a>
</nav>
