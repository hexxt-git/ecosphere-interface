<script>
	// @ts-nocheck

	import '$lib/setup.css';
	import { ModeWatcher } from 'mode-watcher';
	import { onNavigate } from '$app/navigation';
	import { Toaster } from 'svelte-sonner';

	import { t } from '$lib/i18n';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	let banner = true;
	setTimeout(() => (banner = false), 10000);
</script>

<div
	class="fixed top-0 left-o w-full h-14 bg-primary-foreground/50 backdrop-blur-sm flex items-center justify-center border-b transition-all duration-300 gap-3 cursor-pointer"
	style="opacity: {banner ? '1' : '0'}; pointer-events: {banner ? 'all' : 'none'}"
	on:click={() => (banner = false)}
>
	the website you are currently viewing is only an interface, a fullstack version does exist
	<span class="border rounded-full w-6 h-6 font-mono text-center">x</span>
</div>

<head>
	<title>EcoSphere</title>
</head>

<Toaster />
<ModeWatcher />
<body class={$t('style.orientation') == 'row' ? 'ltr' : 'rtl'}>
	<slot />
</body>

<style>
	@keyframes fade-in {
		from {
			opacity: 0;
		}
	}

	@keyframes fade-out {
		to {
			opacity: 0;
		}
	}

	:root::view-transition-old(root) {
		animation: 400ms cubic-bezier(0.4, 0, 1, 1) both fade-out;
	}

	:root::view-transition-new(root) {
		animation: 200ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in;
	}

	body {
		background: radial-gradient(circle at 30% 0%, hsl(108, 87%, 96%) 15%, #ffffff 60%);
	}
	body:before {
		content: '';
		position: absolute;
		inset: 0;
		background-image: url('/noise.webp');
		mask-image: radial-gradient(circle at 50% 100%, rgba(0, 0, 0, 0.3) 10%, black);
		opacity: 0.3;
		z-index: -20;
	}
	:global(.dark) body {
		background: radial-gradient(circle at 30% 0%, #111810 15%, #080a09 60%);
	}
	:global(.dark) body::before {
		background-size: 900px 900px;
		opacity: 0.1;
	}
	.ltr {
		direction: ltr;
	}
	.rtl {
		direction: rtl;
	}
</style>
