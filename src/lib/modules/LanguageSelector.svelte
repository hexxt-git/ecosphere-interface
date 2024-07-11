<script>
	// @ts-nocheck
	import { t, locale, locales } from '$lib/i18n';
	import * as Select from '$lib/components/ui/select/index.js';
	import { Sparkle } from 'lucide-svelte';
	import { toast } from 'svelte-sonner';

	// Language options

	let className = '';

	function handleLanguageChange(newLang) {
		if (newLang.value != 'en') {
			toast.success($t('ai-generated-content'), {
				description: $t('ai-warning'),
			});
		}
		locale.set(newLang.value);
	}

	export { className as class };
</script>

<Select.Root selected={$locale} onSelectedChange={handleLanguageChange}>
	<Select.Trigger class={className}>
		{$t('info.name')}
	</Select.Trigger>
	<Select.Content>
		{#each locales as value}
			<Select.Item {value} aiGenerated={value != 'en'} />
		{/each}
	</Select.Content>
</Select.Root>
