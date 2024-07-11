<script>
	import { page } from '$app/stores';
	import Card from '$lib/components/ui/card/card.svelte';
	import { t, locale } from '$lib/i18n';
</script>

<div class="h-screen flex items-center justify-center">
	<Card class="bg-card/70 backdrop-blur-md p-8 pb-10">
		{#if $locale}
			{$t('error.apology')} <br />
			{$t('status')}: {$t($page?.status)} {$page?.status}<br />
			{$t('message')}: {$page?.error.message} <br />
		{:else}
			<h1>It seems there has been an error, sorry about that.</h1>
			{#if $page?.error}
				<div class="mt-4 p-4 border-y-2">
					{#if $page?.status}
						<p>Page status: {$page?.status}</p>
					{/if}
					{#if $page?.error?.message}
						<p>Error message: {$page?.error?.message}</p>
					{/if}
				</div>
			{/if}
		{/if}
	</Card>
</div>
