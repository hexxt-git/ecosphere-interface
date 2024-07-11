<script>
	// @ts-nocheck

	import { PaneGroup, Pane, PaneResizer } from 'paneforge';
	import UserCard from '$lib/modules/UserCard.svelte';
	import { AlignCenter, AlignJustify, Megaphone, PhoneCall, SendHorizontal, Video } from 'lucide-svelte';
	import Button from '$lib/components/ui/button/button.svelte';

	const messages = [
		{
			sender: 'user1',
			message: 'Svelte and SvelteKit are the best!',
		},
		{
			sender: 'user2',
			message: 'I completely agree! They are so powerful and easy to use.',
		},
		{
			sender: 'user1',
			message: 'With Svelte, you can build highly efficient and reactive web applications.',
		},
		{
			sender: 'user2',
			message: 'And SvelteKit makes it even better by providing server-side rendering and routing capabilities.',
		},
		{
			sender: 'user1',
			message: "Exactly! It's a great combination for building modern web applications.",
		},
		{
			sender: 'user2',
			message:
				'I love how Svelte simplifies the development process with its declarative syntax and automatic reactivity.',
		},
		{
			sender: 'user1',
			message:
				'And SvelteKit takes care of the routing and server-side rendering, making it a complete framework.',
		},
		{
			sender: 'user2',
			message: "Definitely! It's a game-changer for web development.",
		},
		{
			sender: 'user1',
			message:
				'Absolutely! TypeScript adds static typing to JavaScript, which helps catch errors early and improves code maintainability.',
		},
		{
			sender: 'user2',
			message:
				"That's right! With TypeScript, you can leverage features like type checking, interfaces, and generics to build more robust and scalable applications.",
		},
		{
			sender: 'user1',
			message:
				'And the best part is that Svelte has excellent TypeScript support, making it a perfect choice for TypeScript developers.',
		},
		{
			sender: 'user2',
			message:
				"I couldn't agree more! Svelte's integration with TypeScript allows for better code organization, autocompletion, and refactoring.",
		},
		{
			sender: 'user1',
			message: "Definitely! It's a winning combination for building modern, type-safe web applications.",
		},
		{
			sender: 'user1',
			message: 'Have you heard about Rust? It is a powerful and safe systems programming language.',
		},
		{
			sender: 'user2',
			message: 'Yes, Rust is known for its strong memory safety guarantees and zero-cost abstractions.',
		},
		{
			sender: 'user1',
			message: "That's right! Rust's ownership model ensures memory safety without sacrificing performance.",
		},
		{
			sender: 'user2',
			message:
				"And Rust's borrow checker prevents common programming errors like null pointer dereferences and data races.",
		},
		{
			sender: 'user1',
			message: 'Exactly! Rust is designed to make it easy to write reliable and efficient code.',
		},
		{
			sender: 'user2',
			message:
				'And with its growing ecosystem and community support, Rust is becoming a popular choice for systems programming.',
		},
	];
	const contacts = [
		{
			name: 'John Doe',
			avatar: 'https://avatars.githubusercontent.com/u/25156177?v=4',
			status: 'online',
		},
		{
			name: 'John Doe',
			avatar: 'https://avatars.githubusercontent.com/u/25156177?v=4',
			status: 'offline',
		},
		{
			name: 'Jane Doe',
			avatar: 'https://avatars.githubusercontent.com/u/25156177?v=4',
			status: 'away',
		},
	];
</script>

<PaneGroup direction="horizontal" class="border-b">
	<Pane defaultSize={30} class="bg-background/40 backdrop-blur-md overflow-x-hidden" style="direction: rtl">
		<h2 class="border-b p-3 text-3xl h-[80px] flex justify-center items-center bg-card">Contacts</h2>
		<div class="h-[calc(100vh-64px)] overflow-y-scroll" style="scrollbar-width: thin;">
			<ul class="min-w-[100px]" style="direction: ltr;">
				{#each new Array(10).fill(contacts).flat() as contact}
					<li class="text-lg border-b p-3">
						<a href="/chat">
							<div class="flex items-center gap-3">
								<img src={contact.avatar} alt={contact.name} class="w-10 h-10 rounded-full" />
								<div class="flex flex-col">
									<span>{contact.name}</span>
									<span class="text-sm text-gray-500">{contact.status}</span>
								</div>
							</div>
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</Pane>
	<PaneResizer>
		<div class="h-full relative bg-background">
			<hr class="h-full w-0 border" />
			<div class="absolute right-0 top-[50%] bottom-[50%] translate-x-1/2 p-2 py-3 rounded-lg bg-border"></div>
		</div>
	</PaneResizer>
	<Pane defaultSize={70} class="bg-background/30 overflow-hidden h-screen mobile:h-[calc(100vh-64px)]">
		<div
			class="grid min-w-[200px] w-full h-full"
			style="grid-template-rows: 80px calc(100% - 64px - 80px - 65px) 65px;"
		>
			<div class="bg-card h-[80px] p-4 border-b border-b-border flex justify-between items-center">
				<UserCard />
				<div class="flex gap-6 mr-6 items-center mobile:hidden">
					<Button class="border rounded-full p-2">
						<Megaphone class="text-white" size="22" />
					</Button>
					<Button class="border rounded-full p-2">
						<PhoneCall class="text-white" size="22" />
					</Button>
					<Button class="border rounded-full p-2">
						<Video class="text-white" size="22" />
					</Button>
				</div>
				<Button class="border rounded-full p-2 hidden mobile:flex">
					<AlignJustify class="text-white" size="28" />
				</Button>
			</div>

			<main class="p-3 flex flex-col-reverse gap-3 mr-2" style="overflow-y: scroll; scrollbar-width: thin;">
				{#each messages.reverse() as message}
					{#if message.sender === 'user1'}
						<div class="bg-card p-3 rounded-xl w-fit max-w-[80%]">
							{message.message}
						</div>
					{:else}
						<div class="bg-primary-foreground p-3 rounded-xl w-fit max-w-[80%] self-end">
							{message.message}
						</div>
					{/if}
				{/each}
			</main>
			<form action="" class="flex gap-4 justify-center items-center px-4 py-3 border-t">
				<input
					type="text"
					class="bg-card border rounded-2xl h-full w-full p-2 focus:border-primary focus:outline-none"
				/>
				<Button class="h-full rounded-2xl"><SendHorizontal color="white" /></Button>
			</form>
		</div>
	</Pane>
</PaneGroup>
