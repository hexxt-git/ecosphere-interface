<script>
	// @ts-ignore
	import Autoplay from 'embla-carousel-autoplay';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import photo from '$lib/images/placeholder.jpg';
	import Image from '$lib/components/ui/image/Image.svelte';
	import { Calendar, Share2, UsersRound } from 'lucide-svelte';
	import { Table, TableBody, TableCell, TableRow } from '$lib/components/ui/table/index.js';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Flame } from 'lucide-svelte';
	import { t } from '$lib/i18n';

	const plugin = Autoplay({ delay: 2000, stopOnInteraction: true });
</script>

<main class="w-[80%] max-w-[1000px] mobile:w-full mx-auto p-5 pb-0 space-y-5">
	<h2 class="text-3xl w-fit pb-1">Beach cleaning:</h2>
</main>

<Carousel.Root
	plugins={[plugin]}
	class="w-full mx-auto cursor-grab active:cursor-grabbing"
	on:mousenter={plugin.stop}
	on:mouseleave={plugin.reset}
>
	<Carousel.Content>
		{#each Array(5) as _, i (i)}
			<Carousel.Item>
				<div class="py-4 px-12 mobile:px-4">
					<Image src={photo} class="rounded-lg h-[60vh] mobile:h-[30vh] aspect-video object-cover" />
				</div>
			</Carousel.Item>
		{/each}
	</Carousel.Content>
</Carousel.Root>

<main class="w-[80%] max-w-[1000px] mobile:w-full mx-auto p-5 space-y-5">
	<h2 class="text-3xl w-fit pb-1">Cleaning on the south coast:</h2>
	<div class="flex gap-4 text-md items-center ml-4">
		<Calendar size="30" /> Tuesday, July 13th 1982 - 12:00
	</div>
	<div class="flex gap-4 text-md items-center ml-4">
		<UsersRound size="30" /> 72 {$t('people-attending')} - 28 {$t('spots-available')}
	</div>
	<br />
	<h2 class="text-3xl w-fit pb-1">Event plan:</h2>
	<div class="border bg-card/30 p-7 rounded-xl">
		<h3 class="mb-3">Beach cleaning plan:</h3>

		<li class="mb-3">
			Clean the beach and remove litter. This includes picking up trash such as plastic bottles, food wrappers,
			and cigarette butts. We will ensure that every inch of the beach is thoroughly cleaned, leaving no trace of
			waste behind.
		</li>
		<li class="mb-3">
			Sort and separate recyclable materials. We will have designated bins for different types of recyclables,
			such as plastic, glass, and paper. Our team will carefully separate these materials to maximize recycling
			efforts and minimize waste.
		</li>
		<li class="mb-3">
			Educate participants about the importance of environmental conservation. We will have knowledgeable
			volunteers who will provide information about the impact of litter on marine life and ecosystems. They will
			also share tips on how individuals can reduce their carbon footprint and contribute to a cleaner
			environment.
		</li>
		<li class="mb-3">
			Collect data on the types and quantities of waste found. As part of our research initiative, we will record
			the different types of waste we encounter during the beach cleaning event. This data will help us identify
			patterns and trends, allowing us to develop targeted strategies for waste reduction and management.
		</li>
		<li class="mb-3">
			Promote sustainable practices and encourage others to join the cause. We believe that collective action is
			key to creating a sustainable future. Throughout the event, we will engage with participants and the local
			community, spreading awareness about the importance of sustainable practices and inspiring others to get
			involved in similar initiatives.
		</li>
	</div>
	<h2 class="text-3xl w-fit pb-1">Sign up information:</h2>

	<Table class="w-full border-y border-y-border bg-card/20">
		<TableRow class="bg-card/30">
			<TableCell class="pt-4 pb-2 px-4">Number of People Needed</TableCell>
			<TableCell class="pt-4 pb-2 px-4">Specialists Needed</TableCell>
		</TableRow>
		<TableBody>
			<TableRow>
				<TableCell class="pt-4 pb-2 px-4">4 - 6</TableCell>
				<TableCell class="pt-4 pb-2 px-4">Environmental Science</TableCell>
			</TableRow>
			<TableRow>
				<TableCell class="pt-4 pb-2 px-4">3 - 4</TableCell>
				<TableCell class="pt-4 pb-2 px-4">Marine Biology</TableCell>
			</TableRow>
			<TableRow>
				<TableCell class="pt-4 pb-2 px-4">7 - 10</TableCell>
				<TableCell class="pt-4 pb-2 px-4">Ecology</TableCell>
			</TableRow>
			<TableRow>
				<TableCell class="pt-4 pb-2 px-4">1 - 2</TableCell>
				<TableCell class="pt-4 pb-2 px-4">Conservation</TableCell>
			</TableRow>
			<TableRow>
				<TableCell class="pt-4 pb-2 px-4">8 - 16</TableCell>
				<TableCell class="pt-4 pb-2 px-4">Worker</TableCell>
			</TableRow>
		</TableBody>
	</Table>

	<div class="flex gap-2 justify-end mt-8">
		<Button class="text-lg py-5 w-36" variant="outline">{$t('share-1')} &nbsp; <Share2 size="18" /></Button>
		<a href="/events/123/join">
			<Button class="text-lg py-5 w-36">{$t('participate-0')} &nbsp;<Flame size="18" /></Button>
		</a>
	</div>
</main>
<br />
<a
	href="/events/123/join"
	class="group h-16 p-3 rounded-full sticky bottom-12 mobile:bottom-24 right-12 text-foreground text-2xl flex justify-between items-center bg-primary hover:placeholder-opacity-80 transition-bg"
	style="float: right"
>
	<span
		class="w-0 opacity-0 group-hover:w-40 group-hover:opacity-100 group-hover:pl-4"
		style="transition: width 100ms ease, opacity 200ms 150ms ease"
	>
		{$t('participate-0')}
	</span>
	<Flame size="full" class="text-white" />
</a>
<br />
<br />
