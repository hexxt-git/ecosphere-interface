<script>
	import { Card } from '$lib/components/ui/card';
	import { H2 } from '$lib/components/ui/headers';
	import { FormInput } from '$lib/components/ui/form_input';
	import CodeInput from './CodeInput.svelte';
	import Background from '$lib/modules/Background.svelte';
	import { t } from '$lib/i18n';
</script>

<main class="flex align-center items-center justify-center min-h-svh" style="box-sizing: border-box;">
	<Background />
	<Card class="m-4 mobile:px-4 w-full px-20 pt-12 pb-16 min-h-[400px] max-w-[600px] flex items-center flex-col">
		<H2>{$t('one-last-step')}</H2>
		<span class="my-4 opacity-70"> {$t('confirm-instructions')} </span>
		<CodeInput />
		<form class="flex flex-col gap-4 w-full" action="">
			<FormInput type="submit" value="Continue" class="cursor-pointer" />
		</form>
		<a href="/login" class="mt-6 text-sm opacity-70"> {$t('go-back-to-login')} </a>
	</Card>
</main>
