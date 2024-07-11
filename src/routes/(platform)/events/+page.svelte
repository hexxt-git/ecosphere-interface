<script>
	import MultiCarousel from '$lib/modules/MultiCarousel.svelte';
	import EventCard from '$lib/modules/EventCard.svelte';
	import CarouselItemEvent from '$lib/modules/CarouselItemEvent.svelte';
</script>

<div class="py-8 mx-14 mobile:mx-0 p-5">
	<EventCard buttons_class="ml-0 mobile:ml-auto mobile:mr-0" />
</div>

<h2 class="ml-28 mt-4 -mb-2 text-3xl w-fit">Upcoming Events:</h2>
<div class="w-screen overflow-hidden">
	<MultiCarousel>
		<CarouselItemEvent />
		<CarouselItemEvent />
		<CarouselItemEvent />
		<CarouselItemEvent />
		<CarouselItemEvent />
	</MultiCarousel>
</div>

<h2 class="ml-28 mt-4 -mb-2 text-3xl w-fit">Latest Events:</h2>
<div class="w-screen overflow-hidden">
	<MultiCarousel>
		<CarouselItemEvent />
		<CarouselItemEvent />
		<CarouselItemEvent />
		<CarouselItemEvent />
		<CarouselItemEvent />
		<CarouselItemEvent />
		<CarouselItemEvent />
		<CarouselItemEvent />
		<CarouselItemEvent />
		<CarouselItemEvent />
		<CarouselItemEvent />
		<CarouselItemEvent />
		<CarouselItemEvent />
		<CarouselItemEvent />
		<CarouselItemEvent />
		<CarouselItemEvent />
		<CarouselItemEvent />
		<CarouselItemEvent />
		<CarouselItemEvent />
		<CarouselItemEvent />
		<CarouselItemEvent />
		<CarouselItemEvent />
		<CarouselItemEvent />
		<CarouselItemEvent />
	</MultiCarousel>
</div>

<h2 class="ml-28 mt-4 -mb-2 text-3xl w-fit">Historical Events:</h2>
<div class="grid grid-cols-2 gap-4 mx-16 md:mx-4 my-4 md:grid-cols-1">
	<EventCard height="180px" buttons_class="mobile:mr-0" />
	<EventCard height="180px" buttons_class="mobile:mr-0" />
	<EventCard height="180px" buttons_class="mobile:mr-0" />
	<EventCard height="180px" buttons_class="mobile:mr-0" />
	<EventCard height="180px" buttons_class="mobile:mr-0" />
</div>
