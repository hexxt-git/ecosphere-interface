<script>
	import CarouselItemEvent from './CarouselItemEvent.svelte';

	import * as Carousel from '$lib/components/ui/carousel/index.js';
</script>

<Carousel.Root
	opts={{
		align: 'start',
	}}
	class="w-[calc(100% - 200px)] mx-16 my-2 cursor-grab active:cursor-grabbing"
>
	<Carousel.Content>
		<slot />
		<CarouselItemEvent />
	</Carousel.Content>
	<Carousel.Previous />
	<Carousel.Next />
</Carousel.Root>
