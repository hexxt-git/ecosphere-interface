<script>
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import { Button } from '$lib/components/ui/button/index';
	import photo from '$lib/images/placeholder.jpg';
	import { CircleCheck, Flame, Share2 } from 'lucide-svelte';
	import { t } from '$lib/i18n';
</script>

<Carousel.Item class="basis-1/3 md:basis-1/2 mobile:basis-full">
	<div class="p-1">
		<Card.Root>
			<Card.Content class="aspect-square p-3 flex flex-col justify-between">
				<a href="/events/123">
					<img src={photo} alt="" class="aspect-video w-fit object-cover border rounded-md mb-3" />
					<h3 class="text-xl">tree plantation</h3>
					<span class="opacity-70 text-sm">Sunday, March 2nd 2020 - 08:00</span>
					<div class="opacity-70 text-sm flex gap-1 items-center mobile:mb-2">
						<CircleCheck size="20" />
						81 {$t('people-attending')} - 19 {$t('spots-left')}
					</div>
				</a>
				<div>
					<a href="/events/123/join">
						<Button variant="outline" class="w-full mt-4"
							>{$t('join')}<Flame size="18" class="ml-3" /></Button
						>
					</a>
					<Button variant="outline" class="w-full mt-2"
						>{$t('share-0')}<Share2 size="18" class="ml-3" /></Button
					>
				</div>
			</Card.Content>
		</Card.Root>
	</div>
</Carousel.Item>
