<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import { Card } from '$lib/components/ui/card';
	import ScrollArea from '$lib/components/ui/scroll-area/scroll-area.svelte';
	import src from '$lib/images/placeholder.jpg';
	import Post from '$lib/modules/Post.svelte';
	import { Flame, MailIcon, MapPin, UserPlus2 } from 'lucide-svelte';
	import { t } from '$lib/i18n';
</script>

<main class="w-[80%] max-w-[1000px] mobile:w-full mx-auto p-5">
	<div class="relative mb-20 -mt-14">
		<img {src} alt="" class="w-full h-[300px] mobile:h-[200px] object-cover rounded-[30px] border" />
		<img
			{src}
			alt=""
			class="absolute bottom-0 left-12 w-32 h-32 translate-y-[50%] rounded-full border bg-card object-cover"
		/>
	</div>
	<div class="grid grid-flow-col grid-cols-3 grid-rows-2 mobile:grid-cols-1 mobile:grid-rows-5">
		<h2 class="text-xl">Wail Bentafat</h2>
		<h3 class="tex-md flex gap-2 items-center opacity-80">{$t('a-member-since')} June 2018</h3>
		<h3 class="tex-md flex gap-2 items-center my-1 opacity-80"><MapPin size="18" /> Paris, France</h3>
		<h3 class="tex-md flex gap-2 items-center opacity-80">{$t('last-seen')} 20min ago</h3>
		<div class="flex flex-col gap-2 ml-auto row-span-full mobile:row-span-1 mobile:flex-row">
			<a href="/chat">
				<Button class="px-8 flex items-center gap-3">{$t('message-0')}<MailIcon size="18" /></Button>
			</a>
			<Button class="px-8 flex items-center gap-3">{$t('follow')}<UserPlus2 size="18" /></Button>
		</div>
	</div>
	<Card class="p-4 my-5">
		<h3>{$t('about-me')}</h3>
		<p class="opacity-80">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, voluptatibus iste! Sit magnam
			dignissimos pariatur laborum perferendis quia! Est soluta deleniti expedita natus ex, architecto unde? Vitae
			eveniet amet assumenda! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error voluptatum corrupti
			nemo sed, itaque vel, ratione recusandae non repellendus quisquam nulla quibusdam iusto consequuntur
			temporibus tempore excepturi saepe aliquid doloribus.
		</p>
	</Card>
	<div class="grid grid-cols-3 md:grid-cols-2 mobile:grid-cols-1 gap-4">
		<div>
			<Card class="p-4 h-80">
				<ScrollArea class="h-full">
					<h3 class="text-lg text-center mb-2">{$t('badges')}</h3>
					<hr />
					<Card class="flex gap-3 p-3 my-3 rounded-2xl"><Flame /> fire</Card>
					<Card class="flex gap-3 p-3 my-3 rounded-2xl"><Flame /> fire</Card>
					<Card class="flex gap-3 p-3 my-3 rounded-2xl"><Flame /> fire</Card>
					<Card class="flex gap-3 p-3 my-3 rounded-2xl"><Flame /> fire</Card>
					<Card class="flex gap-3 p-3 my-3 rounded-2xl"><Flame /> fire</Card>
					<Card class="flex gap-3 p-3 my-3 rounded-2xl"><Flame /> fire</Card>
					<Card class="flex gap-3 p-3 my-3 rounded-2xl"><Flame /> fire</Card>
				</ScrollArea>
			</Card>
		</div>
		<div>
			<Card class="p-4 h-80">
				<ScrollArea class="h-full">
					<h3 class="text-lg text-center mb-2">{$t('contributions')}</h3>
					<hr />
					<Card class="flex gap-3 p-3 my-3 rounded-2xl"><Flame /> fire</Card>
					<Card class="flex gap-3 p-3 my-3 rounded-2xl"><Flame /> fire</Card>
					<Card class="flex gap-3 p-3 my-3 rounded-2xl"><Flame /> fire</Card>
					<Card class="flex gap-3 p-3 my-3 rounded-2xl"><Flame /> fire</Card>
					<Card class="flex gap-3 p-3 my-3 rounded-2xl"><Flame /> fire</Card>
					<Card class="flex gap-3 p-3 my-3 rounded-2xl"><Flame /> fire</Card>
					<Card class="flex gap-3 p-3 my-3 rounded-2xl"><Flame /> fire</Card>
				</ScrollArea>
			</Card>
		</div>
		<div>
			<Card class="p-4 h-80 mobile:translate-x-0 md:translate-x-[50%]">
				<ScrollArea class="h-full">
					<h3 class="text-lg text-center mb-2">{$t('friends')}</h3>
					<hr />
					<Card class="flex gap-3 p-3 my-3 rounded-2xl"><Flame /> fire</Card>
					<Card class="flex gap-3 p-3 my-3 rounded-2xl"><Flame /> fire</Card>
					<Card class="flex gap-3 p-3 my-3 rounded-2xl"><Flame /> fire</Card>
					<Card class="flex gap-3 p-3 my-3 rounded-2xl"><Flame /> fire</Card>
					<Card class="flex gap-3 p-3 my-3 rounded-2xl"><Flame /> fire</Card>
					<Card class="flex gap-3 p-3 my-3 rounded-2xl"><Flame /> fire</Card>
					<Card class="flex gap-3 p-3 my-3 rounded-2xl"><Flame /> fire</Card>
				</ScrollArea>
			</Card>
		</div>
	</div>

	<br />
	<Post />
	<br />
	<Post />
	<br />
	<Post />
</main>
