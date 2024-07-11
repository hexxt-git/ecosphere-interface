<script>
	import Background from '$lib/modules/Background.svelte';
	import { Card } from '$lib/components/ui/card';
	import { H2 } from '$lib/components/ui/headers';
	import { FormInput } from '$lib/components/ui/form_input';
	import { FormButton } from '$lib/components/ui/form_button';
	import {t} from '$lib/i18n'
</script>

<main class="flex align-center items-center justify-center min-h-svh" style="box-sizing: border-box;">
	<Background />
	<Card class="m-4 mobile:px-4 w-full px-20 pt-12 pb-16 min-h-[400px] max-w-[600px] flex items-center flex-col">
		<H2>{ $t('welcome-back') }</H2>
		<div class="w-full py-4 text-center">
			<span class="opacity-70">{ $t('dont-have-an-account') }</span>
			<a href="/signup">{ $t('sign-up') }</a>
		</div>
		<form class="flex flex-col gap-4 w-full" action="">
			<FormInput type="text" placeholder="username" />
			<FormInput type="email" placeholder="email" />
			<FormInput type="submit" value={ $t('sign-up-0') } class="cursor-pointer" />
		</form>
		<a href="/password_reset" class="text-sm opacity-70 my-3">{ $t('cant-sign-in') }</a>
		<div class="flex gap-2 text-sm w-full items-center my-3">
			<hr class="w-full" />
			<span class="whitespace-nowrap opacity-70">{ $t('or-continue-with') }</span>
			<hr class="w-full" />
		</div>
		<div class="flex flex-col gap-4 w-full">
			<FormButton class="w-full">
				<img src="/icons/google.webp" alt="Google" class="w-6 h-6 mr-2" />
				<span class="w-48 text-start"> { $t('continue-with-google') } </span>
			</FormButton>
			<FormButton class="w-full">
				<img src="/icons/facebook.png" alt="Facebook" class="w-6 h-6 mr-2" />
				<span class="w-48 text-start"> { $t('continue-with-facebook') } </span>
			</FormButton>
			<FormButton class="w-full">
				<img src="/icons/apple.png" alt="Apple" class="w-6 h-6 mr-2" />
				<span class="w-48 text-start"> { $t('continue-with-apple') } </span>
			</FormButton>
		</div>
	</Card>
</main>
