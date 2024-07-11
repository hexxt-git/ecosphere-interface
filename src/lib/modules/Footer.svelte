<script>
	import { CrownIcon, Map, Scroll } from 'lucide-svelte';
	import ThemeSelector from './ThemeSelector.svelte';
	import LanguageSelector from './LanguageSelector.svelte';
	import {t} from '$lib/i18n'
</script>

<footer
	class="w-full px-4 py-12 border-t border-t-border grid grid-cols-3 text-center mobile:grid-cols-1 mobile:grid-rows-3 bg-background/80 backdrop-blur-lg"
>
	<div class="flex flex-col items-center pb-16 mobile:py-5 mobile:order-3">
		<h2 class="text-lg border-b border-b-foreground mb-8">
			{ $t('legal-and-support') }<Scroll size="20" class="inline mb-1" />
		</h2>
		<ul class="text-left">
			<li
				class="border-b hover:border-b-foreground w-fit mb-4"
				style="transition: all 150ms ease-in-out"
			>
				<a href="/docs#privacy">{ $t('privacy-policy') }</a>
			</li>
			<li
				class="border-b hover:border-b-foreground w-fit mb-4"
				style="transition: all 150ms ease-in-out"
			>
				<a href="/docs#terms">{ $t('terms-of-service') }</a>
			</li>
			<li
				class="border-b hover:border-b-foreground w-fit mb-4"
				style="transition: all 150ms ease-in-out"
			>
				<a href="/docs#help">{ $t('help-center') }</a>
			</li>
			<li
				class="border-b hover:border-b-foreground w-fit mb-4"
				style="transition: all 150ms ease-in-out"
			>
				<a href="/docs#report">{ $t('report-a-problem') }</a>
			</li>
		</ul>
	</div>
	<div
		class="border-x mobile:border-x-0 mobile:border-y flex flex-col items-center pb-16 mobile:py-5 mobile:order-2"
	>
		<h2 class="text-lg border-b border-b-foreground mb-8">{ $t('creators') }<CrownIcon size="20" class="inline mb-1" /></h2>
		<ul class="text-left">
			<li
				class="border-b hover:border-b-foreground w-fit mb-4"
				style="transition: all 150ms ease-in-out"
			>
				<a href="/about#team">{ $t('the-team') }</a>
			</li>
			<li
				class="border-b hover:border-b-foreground w-fit mb-4"
				style="transition: all 150ms ease-in-out"
			>
				<a href="/about#hackathon">{ $t('the-hackathon') }</a>
			</li>
			<li
				class="border-b hover:border-b-foreground w-fit mb-4"
				style="transition: all 150ms ease-in-out"
			>
				<a href="/presentation">{ $t('our-presentation') }</a>
			</li>
		</ul>
	</div>
	<div class="flex flex-col items-center pb-8 mobile:py-5 mobile:order-1">
		<h2 class="text-lg border-b border-b-foreground mb-8">{ $t('navigation') } <Map size="20" class="inline mb-1" /></h2>
		<ul class="text-left">
			<li
				class="border-b hover:border-b-foreground w-fit mb-4"
				style="transition: all 150ms ease-in-out"
			>
				<a href="/">{$t('landing-page')}</a>
			</li>
			<li
				class="border-b hover:border-b-foreground w-fit mb-4"
				style="transition: all 150ms ease-in-out"
			>
				<a href="/feed">{ $t('home-feed') }</a>
			</li>
			<li
				class="border-b hover:border-b-foreground w-fit mb-4"
				style="transition: all 150ms ease-in-out"
			>
				<a href="/events">{ $t('event-explorer') }</a>
			</li>
			<li class="mt-2 space-y-3 w-[140px]">
				<LanguageSelector />
				<ThemeSelector />
			</li>
		</ul>
		<br />
	</div>
</footer>
