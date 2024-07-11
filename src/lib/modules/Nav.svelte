<script>
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import { page } from '$app/stores';
	import { AlignJustify, Bell, CircleUserRound, MessageCircle } from 'lucide-svelte';

	import * as Dialog from '$lib/components/ui/dialog';
	import Notifications from './Notifications.svelte';
	import ThemeSelector from './ThemeSelector.svelte';
	import { mode } from 'mode-watcher';
	import { t } from '$lib/i18n';
	import LanguageSelector from './LanguageSelector.svelte';
</script>

<nav
	class="h-[64px] w-full fixed top-0 left-0 flex items-center justify-between px-16 mobile:px-6 border-b border-b-border shadow-sm z-10"
	style="
		background: linear-gradient(hsl(var(--background)) 0%, transparent 400%);
		backdrop-filter: blur(20px);
	"
>
	<a href="/feed" class="flex items-center">
		<img src="/logo/{$mode ?? 'light'}.svg" alt="" class="h-[90px]" />
	</a>

	<div class="w-[30%] max-w-[360px] flex justify-between gap-4 mobile:hidden">
		<a
			class="text-lg {$page.url.pathname.match(/feed/)?.length
				? 'opacity-100 border-b-2 border-b-foreground'
				: 'opacity-70'}"
			href="/feed">{ $t('feed') }</a
		>
		<a
			class="text-lg {$page.url.pathname.match(/events/)?.length
				? 'opacity-100 border-b-2 border-b-foreground'
				: 'opacity-70'}"
			href="/events">{ $t('events') }</a
		>
		<a
			class="text-lg {$page.url.pathname.match(/impact/)?.length
				? 'opacity-100 border-b-2 border-b-foreground'
				: 'opacity-70'}"
			href="/impact">{ $t('impact') }</a
		>
	</div>

	<div class="flex gap-4">
		<!-- <span
			class="rounded-full cursor-pointer p-[6px] flex items-center justify-center"
		>
			<Search size=26 />
		</span> -->

		<a href="/chat" class="rounded-full cursor-pointer p-[6px] flex items-center justify-center">
			<MessageCircle size="26" />
		</a>

		<Dialog.Root>
			<Dialog.Trigger>
				<span class="rounded-full cursor-pointer p-[6px] flex items-center justify-center">
					<Bell />
				</span>
			</Dialog.Trigger>
			<Dialog.Content class="top-[70px] right-[8px] left-[none] translate-x-0 translate-y-0 rounded-lg">
				<Notifications />
			</Dialog.Content>
		</Dialog.Root>

		<a href="/profile" class="rounded-full cursor-pointer p-[6px] flex items-center justify-center">
			<CircleUserRound size="26" />
		</a>

		<Sheet.Sheet>
			<Sheet.Trigger>
				<span class="rounded-full cursor-pointer p-[6px] flex items-center justify-center">
					<AlignJustify size="30" />
				</span>
			</Sheet.Trigger>
			<Sheet.Content>
				<div class="flex flex-col">
					<a href="/" class="my-4 text-center">EcoSphere</a>

					<a href="/" class="bg-secondary w-full text-xl px-6 py-2 rounded-3xl my-2">{$t('landing-page-0')}</a
					>
					<a href="/feed" class="bg-secondary w-full text-xl px-6 py-2 rounded-3xl my-2">{$t('feed')}</a>
					<a href="/events" class="bg-secondary w-full text-xl px-6 py-2 rounded-3xl my-2">{$t('events')}</a>
					<a href="/impact" class="bg-secondary w-full text-xl px-6 py-2 rounded-3xl my-2">{$t('impact')}</a>
					<a href="/chat" class="bg-secondary w-full text-xl px-6 py-2 rounded-3xl my-2">{$t('chat')}</a>
					<a href="/profile" class="bg-secondary w-full text-xl px-6 py-2 rounded-3xl my-2">{$t('profile')}</a
					>

					<ThemeSelector class="p-5 rounded-3xl my-2" />
					<LanguageSelector class="p-5 rounded-3xl my-2" />
				</div>
			</Sheet.Content>
		</Sheet.Sheet>
	</div>
</nav>
