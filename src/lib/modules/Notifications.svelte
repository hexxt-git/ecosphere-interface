<script>
	import H2 from '$lib/components/ui/headers/H2.svelte';
	import H3 from '$lib/components/ui/headers/H3.svelte';
	import { Circle } from 'lucide-svelte';
	import {t} from '$lib/i18n'

	const notifications = [
		{
			link: '123',
			title: 'forest plantation',
			description: 'we will go plant trees in the neighborhood park',
			time: '10 min',
		},
		{
			link: '123',
			title: 'forest plantation',
			description: 'we will go plant trees in the neighborhood park',
			time: '10 min',
		},
		{
			link: '123',
			title: 'forest plantation',
			description: 'we will go plant trees in the neighborhood park',
			time: '10 min',
		},
		{
			link: '123',
			title: 'forest plantation',
			description: 'we will go plant trees in the neighborhood park',
			time: '10 min',
		},
		{
			link: '123',
			title: 'forest plantation',
			description: 'we will go plant trees in the neighborhood park',
			time: '10 min',
		},
	];
</script>

<H2>{$t('notifications')}</H2>
<hr />
{#each notifications as notification}
	<a href={'/feed/' + notification.link} class="grid gap-3" style="grid-template-columns: auto 1fr;">
		<div class="flex items-center">
			<Circle size="40" />
		</div>
		<div>
			<H3>{notification.title}</H3>
			<p>{notification.description}</p>
		</div>
	</a>
	<hr />
{/each}
<br />
