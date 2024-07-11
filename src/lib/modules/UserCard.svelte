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
	import * as Avatar from '$lib/components/ui/avatar';
	import * as HoverCard from '$lib/components/ui/hover-card';

	export let date = new Date();
</script>

<HoverCard.Root>
	<HoverCard.Trigger class="w-fit">
		<a href="/profile" class="flex gap-3 items-center">
			<Avatar.Root>
				<Avatar.Image src={image} alt="" />
				<Avatar.Fallback>WA</Avatar.Fallback>
			</Avatar.Root>
			<div class="flex flex-col">
				<h2 class="text-xl">
					Wail Bentafat
					<Tooltip.Root>
						<Tooltip.Trigger>
							<span class="opacity-80 text-sm ml-2"
								>{date.toDateString().split(' ').slice(1, 3).join(' ')}</span
							>
						</Tooltip.Trigger>
						<Tooltip.Content class="px-4"
							>{date.toString().split(' ').slice(0, 5).join(' ')}</Tooltip.Content
						>
					</Tooltip.Root>
				</h2>
				<h3>@wail_bentafat</h3>
			</div>
		</a>
	</HoverCard.Trigger>
	<HoverCard.Content>
		<div class="flex flex-col">
			<a href="/profile" class="relative -mb-4">
				<img src={image} alt="" class="rounded-lg w-full aspect-video object-cover" />
				<Avatar.Root class="aboslute bottom-0 left-4 translate-y-[-40%] w-12 h-12 border-4 border-card">
					<Avatar.Image src={image} alt="" />
					<Avatar.Fallback>WA</Avatar.Fallback>
				</Avatar.Root>
			</a>
			<a href="/profile" class="flex flex-col">
				<h2 class="text-xl">Wail Bentafat</h2>
				<h3 class="text-md opacity-80">@wail_bentafat</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis distinctio quidem ipsa odit cumque
					odio incidunt...
				</p>
			</a>
			<a href="/chat" class="mt-2 w-full">
				<Button class="h-8 w-full">Message</Button>
			</a>
			<a href="/profile" class="mt-2 w-full">
				<Button class="h-8 w-full">Follow</Button>
			</a>
		</div>
	</HoverCard.Content>
</HoverCard.Root>
