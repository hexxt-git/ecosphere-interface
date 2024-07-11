<script>
	import Card from '$lib/components/ui/card/card.svelte';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import * as Avatar from '$lib/components/ui/avatar';
	import image from '$lib/images/placeholder.jpg';
</script>

<Card class="my-4 p-3 grid gap-3" style="grid-template-columns: auto 1fr;">
	<Avatar.Root>
		<Avatar.Image src={image} alt="" />
		<Avatar.Fallback>CN</Avatar.Fallback>
	</Avatar.Root>
	<div>
		<h2>
			Wail Bentafat
			<Tooltip.Root>
				<Tooltip.Trigger>
					<span class="opacity-80 text-sm ml-2">18 Jul</span>
				</Tooltip.Trigger>
				<Tooltip.Content class="px-4">Monday, July 18th 2023</Tooltip.Content>
			</Tooltip.Root>
		</h2>
		<p class="opacity-80">
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum voluptatum eius corrupti ipsa ipsam unde!
			Alias exercitationem velit, veritatis magnam optio necessitatibus quibusdam nobis sunt praesentium repellat
			eaque, repellendus et.
		</p>
	</div>
</Card>
