<script>
	import Card from '$lib/components/ui/card/card.svelte';
	import { FormInput } from '$lib/components/ui/form_input';
	import { FormTextarea } from '$lib/components/ui/form_textarea';
	import { H2 } from '$lib/components/ui/headers';
	import Label from '$lib/components/ui/label/label.svelte';
	import { Switch } from '$lib/components/ui/switch';

	let questions = [
		{ type: 'text', required: true, label: 'job', placeholder: 'what job would you like to do' },
		{ type: 'textarea', required: true, label: 'motivation', placeholder: 'what motivates you to take part' },
		{ type: 'switch', required: false, label: 'are you available on that day' },
	];
</script>

<main class="flex justify-center items-center" style="min-height: calc(100vh - 110px);">
	<Card
		class="m-8 w-full px-20 md:px-12 mobile:p-8 pt-12 pb-16 min-h-[400px] max-w-[600px] flex items-center flex-col mobile:max-w-none mobile:w-full"
	>
		<H2 className="text-center">Signing up for <span class="text-primary">tree plantation</span></H2>
		<div class="w-full py-4 text-center opacity-80">Your contribution will be much appreciated</div>

		<form class="flex flex-col w-full gap-1" action="">
			{#each questions as question}
				<div class="mt-3 space-y-1">
					{#if question.type === 'text'}
						<Label class="text-md">{question.label}:</Label>
						<FormInput type="text" placeholder={question.placeholder} required={question.required} />
					{:else if question.type === 'email'}
						<Label class="text-md">{question.label}:</Label>
						<FormInput type="email" placeholder={question.placeholder} required={question.required} />
					{:else if question.type === 'textarea'}
						<Label class="text-md">{question.label}:</Label>
						<FormTextarea rows="3" placeholder={question.placeholder} required={question.required} />
					{:else if question.type === 'switch'}
						<div class="flex gap-3 items-center">
							<Label class="text-md">{question.label}:</Label>
							<Switch />
						</div>
					{/if}
				</div>
			{/each}

			<br />
			<FormInput type="submit" value="Sign up" class="cursor-pointer" />
		</form>
	</Card>
</main>
