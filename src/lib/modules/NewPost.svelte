<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import { Card } from '$lib/components/ui/card';
	import { Camera, Paperclip } from 'lucide-svelte';
	import image from '$lib/images/placeholder.jpg';
	import * as Avatar from '$lib/components/ui/avatar';
	import { t } from '$lib/i18n';
</script>

<Card class="p-4 grid gap-2" style="grid-template-columns: auto 1fr">
	<Avatar.Root>
		<Avatar.Image src={image} alt="" />
		<Avatar.Fallback>CN</Avatar.Fallback>
	</Avatar.Root>
	<form>
		<textarea
			class="w-full rounded-lg border bg-background text-foreground focus:border-primary focus:outline-none p-2"
			rows="2"
			name="content"
			id="content"
			placeholder={$t('write-a-new-post')}
		></textarea>
		<div class="flex gap-2 flex-wrap">
			<Button class="rounded-xl flex gap-2 h-full" variant="outline">
				<Camera size="18" />
				{$t('camera')}
			</Button>
			<Button class="rounded-xl flex gap-2 h-full" variant="outline">
				<Paperclip size="18" />
				{$t('attach-a-file')}
			</Button>
			<Button type="submit" class="rounded-xl h-full ml-auto">{$t('post')}</Button>
		</div>
	</form>
</Card>
