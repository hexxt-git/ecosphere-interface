<script>
	// @ts-nocheck
	import { mode } from 'mode-watcher';
	import { t, locale } from '$lib/i18n';
	import { AlignJustify } from 'lucide-svelte';
	import { DeviceMockup } from 'flowbite-svelte';
	import * as Sheet from '$lib/components/ui/sheet';
	import Footer from '$lib/modules/Footer.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import ThemeSelector from '$lib/modules/ThemeSelector.svelte';
	import LanguageSelector from '$lib/modules/LanguageSelector.svelte';
</script>

<div class="grid min-h-screen" style="grid-template-rows: 120px auto;">
	<!-- <div class="flex fixed mobile:hidden bottom-2 right-2">
		<ThemeSelector class="border-none w-24" />
		<LanguageSelector class="border-none w-24" />
	</div> -->
	<nav class="w-[80%] mx-auto">
		<div class="flex justify-between items-center gap-20 h-full">
			<a href="/">
				<img src="/logo/{$mode ?? 'light'}.svg" alt="" class="h-32" />
			</a>
			<ul class="flex justify-between text-xl w-[50%] min-w-fit gap-6 md:hidden">
				<li><a href="/presentation" target="_blank">{$t('presentation')}</a></li>
				<li><a href="/mobile" target="_blank">{$t('mobile-app')}</a></li>
				<li><a href="/feed">{$t('website')}</a></li>
				<li><a href="/login" class="bg-primary rounded-3xl px-7 py-3 shadow-md">{$t('signup')}</a></li>
			</ul>

			<Sheet.Root>
				<Sheet.Trigger class="hidden md:flex"><AlignJustify size="30" /></Sheet.Trigger>
				<Sheet.Content>
					<div class="flex flex-col">
						<a href="/" class="my-4 text-center">EcoSphere</a>

						<a
							href="/presentation"
							class="bg-secondary w-full text-xl px-4 py-2 rounded-3xl my-2"
							target="_blank">{$t('presentation')}</a
						>
						<a href="/mobile" class="bg-secondary w-full text-xl px-4 py-2 rounded-3xl my-2" target="_blank"
							>{$t('mobile-app')}</a
						>
						<a href="/feed" class="bg-secondary w-full text-xl px-4 py-2 rounded-3xl my-2"
							>{$t('website')}</a
						>
						<a href="/signup" class="bg-secondary w-full text-xl px-4 py-2 rounded-3xl my-2"
							>{$t('signup')}</a
						>
						<a href="/login" class="bg-secondary w-full text-xl px-4 py-2 rounded-3xl my-2">{$t('login')}</a
						>

						<ThemeSelector class="p-5 rounded-3xl my-2" />
						<LanguageSelector class="p-5 rounded-3xl my-2" />
					</div>
				</Sheet.Content>
			</Sheet.Root>
		</div>
	</nav>
	<div class="grid md:flex flex-col overflow-hidden" style="grid-template-columns: 2fr 1fr;">
		<div class="flex flex-col pl-40 md:pl-8 pt-8 pb-40 md:pb-12 justify-center gap-6">
			<h1
				class="text-[6vw] md:text-[5em] mobile:text-[3em] mt-20 md:mt-0 font-title tracking-tight primary-gradient-text"
				style="line-height: {$locale == 'ar' ? '115%' : '90%'};"
			>
				{$t('slogan')} <span class="love-gradient-text">{$t('slogan-end')}</span>
			</h1>
			<h2 class="text-4xl opacity-80 text-gradient-text h-fit">
				{$t('intro')}
			</h2>
			<div class="flex justify-center gap-8 mt-8">
				<a href="/login">
					<Button variant="outline" class="text-xl rounded-[1000px] py-6 px-10 shadow-sm bg-background/40"
						>{$t('login')}</Button
					>
				</a>
				<a href="/signup">
					<Button class="text-xl rounded-[1000px] py-6 px-10 shadow-lg text-foreground">{$t('signup')}</Button
					>
				</a>
			</div>
		</div>
		<div class="flex justify-center items-center relative mb-12 md:mb-20">
			<div class="glow-container">
				<div class="glow"></div>
				<div class="glow" style="top: 50px; left: 150px; scale: 0.8; animation-delay: 9s"></div>
				<div class="glow" style="top: 130px; left: -80px; scale: 0.8; animation-delay: 6s;"></div>
			</div>
			<DeviceMockup device="ios">
				<div class="flex h-full pt-4 bg-background">
					<img src="/images/screenshot-{$mode ?? 'light'}.png" alt="display of the app" />
				</div>
			</DeviceMockup>
		</div>
	</div>
</div>
<Footer />

<style>
	@keyframes glow-animation {
		0% {
			transform: scale(0.8);
		}
		55% {
			transform: scale(1);
		}
		100% {
			transform: scale(0.8);
		}
	}

	@keyframes glow-container-animation {
		0% {
			opacity: 0.1;
		}
		33% {
			opacity: 0.25;
		}
		60% {
			opacity: 0.1;
		}
	}
</style>
