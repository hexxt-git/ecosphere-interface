<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import { Card } from '$lib/components/ui/card';
	import image from '$lib/images/placeholder.jpg';
	import { CircleCheck, Flame, Share2 } from 'lucide-svelte';
	import { cn } from '$lib/utils.js';
	import {t} from '$lib/i18n'

	let className = '';
	export let height = '220px';
	export { className as class };
	export let buttons_class = '';
</script>

<Card
	class={cn('p-4 grid gap-16 mobile:gap-4 mobile:flex mobile:flex-col', className)}
	style="grid-template-columns: 1fr auto;"
>
	<div class="flex flex-col">
		<a href="/events/123" class="flex flex-col mb-auto mobile:flex-col-reverse mobile:mb-0">
			<div class="opacity-70 text-md">Sunday, September 18 2023 - 14:00</div>
			<div class="text-xl">Tree plantation. city's south eastern forest.</div>
			<div class="opacity-70 text-md flex gap-2 items-center mobile:mb-2">
				<CircleCheck />
				81 { $t('people-attending') } - 19 { $t('spots-left') }
			</div>
		</a>
		<div class={cn('flex mx-auto mobile:flex-row mt-1 gap-2', buttons_class)}>
			<a href="/events/123/join">
				<Button variant="outline" class="min-w-32">{$t('join')}<Flame size="18" class="ml-2" /></Button>
			</a>
			<Button
				variant="outline"
				class="min-w-32"
				on:click={async () => {
					if (navigator.share) {
						try {
							await navigator.share({
								title: 'tree planting event',
								text: 'join us planting trees!',
								url: 'https://example.com',
							});
							console.log('Content shared successfully');
						} catch (error) {
							console.error('Error sharing content:', error);
						}
					} else {
						console.log(window, window.navigator);
						console.error('Web Share API not supported in this browser.');
					}
				}}>{$t('share-0')}<Share2 size="18" class="ml-2" /></Button
			>
		</div>
	</div>
	<a href="/events/123" class="flex gap-3 mobile:flex-col min-w-28">
		<img
			src={image}
			alt="event"
			class="mobile:h-auto mobile:w-full aspect-square object-cover rounded-lg"
			style="height: {height};"
		/>
	</a>
</Card>
