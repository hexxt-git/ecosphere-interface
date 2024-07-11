<script>
	// @ts-nocheck

	import { Card } from '$lib/components/ui/card';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import Button from '$lib/components/ui/button/button.svelte';
	import Image from '$lib/components/ui/image/Image.svelte';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import image from '$lib/images/placeholder.jpg';
	import { HandHeart, Heart, MessageCircle, Share2 } from 'lucide-svelte';
	const photos = [image, image, image];
	import Comment from '$lib/modules/Comment.svelte';
	import UserCard from './UserCard.svelte';
	import { t } from '$lib/i18n';

	let api;
	let current = 0;
	let count = 0;
	$: if (api) {
		count = api.scrollSnapList().length;
		current = api.selectedScrollSnap() + 1;

		api.on('select', () => {
			current = api.selectedScrollSnap() + 1;
		});
	}

	export let show_comments = false;
	let newComment = '';
</script>

<Card class="p-4 grid gap-3" style="grid-template-rows: auto 1fr">
	<UserCard />
	<div>
		<a href="/feed/123">
			<p class="opacity-80 mb-2">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptatum quibusdam qui,
				voluptatibus impedit minima? Tempora quasi, ex obcaecati quae impedit harum rerum porro commodi, fuga,
				recusandae alias consequatur quas.
			</p>
		</a>

		<div class="w-fit my-4 flex mx-auto">
			{#if photos.length > 1}
				<Carousel.Root bind:api>
					<Carousel.Content>
						{#each photos as photo}
							<Carousel.Item>
								<Image
									src={photo}
									alt=""
									class="rounded-lg h-[300px] aspect-video object-cover cursor-grab active:cursor-grabbing "
								/>
							</Carousel.Item>
						{/each}
					</Carousel.Content>
					<div class="flex justify-center mt-2">
						{#each new Array(count) as x, i}
							{#if i == current - 1}
								<div class="w-8 h-2 rounded-full bg-primary mx-1"></div>
							{:else}
								<div class="w-8 h-2 rounded-full bg-gray-800 mx-1"></div>
							{/if}
						{/each}
					</div>
				</Carousel.Root>
			{:else if photos.length == 1}
				<Image src={photos[0]} alt="" class="rounded-lg h-[300px] aspect-video object-cover" />
			{/if}
		</div>

		<div class="flex gap-4">
			<Tooltip.Root>
				<Tooltip.Trigger>
					<button class="flex gap-1 items-center">
						{#if Math.random() > 0.7}
							<Heart size="20" /> 128
						{:else}
							<Heart size="20" fill="hsl(var(--primary))" class="text-transparent" /> 128
						{/if}
					</button>
				</Tooltip.Trigger>
				<Tooltip.Content class="px-4">{$t('like')}</Tooltip.Content>
			</Tooltip.Root>

			<Tooltip.Root>
				<Tooltip.Trigger>
					<button class="flex gap-1 items-center">
						{#if Math.random() > 0.7}
							<MessageCircle size="20" /> 28
						{:else}
							<MessageCircle size="20" fill="hsl(var(--primary))" class="text-transparent" /> 28
						{/if}
					</button>
				</Tooltip.Trigger>
				<Tooltip.Content class="px-4">{$t('comments')}</Tooltip.Content>
			</Tooltip.Root>

			<Tooltip.Root>
				<Tooltip.Trigger>
					<button class="flex gap-1 items-center">
						<Share2 size="20" /> 29
					</button>
				</Tooltip.Trigger>
				<Tooltip.Content class="px-4">{$t('share')}</Tooltip.Content>
			</Tooltip.Root>

			<Tooltip.Root>
				<Tooltip.Trigger>
					<button class="flex gap-1 items-center">
						<HandHeart size="20" /> 3
					</button>
				</Tooltip.Trigger>
				<Tooltip.Content class="px-4">{$t('donate')}</Tooltip.Content>
			</Tooltip.Root>
		</div>
		<form action="" class="mt-5">
			<h2>{$t('comment-0')}:</h2>
			<div class="bg-background border focus-within:border-primary rounded-xl p-4 mt-1 relative">
				<textarea
					name="comment"
					id="comment"
					rows={show_comments ? 4 : 2}
					class="w-full h-full overflow-hidden focus:border-none bg-transparent focus:outline-none resize-none"
					bind:value={newComment}
					placeholder={$t('what-do-you-think')}
					style="scrollbar-width: thin; overflow-y: auto"
				></textarea>
				{#if newComment}
					<Button class="absolute bottom-3 right-3">{$t('comment')}</Button>
				{/if}
			</div>
		</form>
		{#if show_comments}
			<Comment />
			<Comment />
			<Comment />
			<Comment />
		{/if}
	</div>
</Card>
