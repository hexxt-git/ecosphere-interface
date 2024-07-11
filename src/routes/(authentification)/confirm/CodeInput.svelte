<script lang="ts">
	let code: string[] = ['', '', '', '', '', ''];
	let inputRefs: (HTMLInputElement | null)[] = new Array(6)
		.fill(null)
		.map(() => null);

	function handleInput(event: Event, index: number) {
		inputRefs[index + 1]?.focus();
	}

	function handleKeyDown(event: KeyboardEvent, index: number) {
		if (event.key === 'Backspace' && index > 0 && !code[index]) {
			inputRefs[index - 1]!.focus();
		}
	}

	function handlePaste(event: ClipboardEvent) {
		event.preventDefault();
		const paste = event.clipboardData?.getData('text') || '';
		const pasteDigits = paste.split('');

		for (let i = 0; i < 6; i++) {
			code[i] = pasteDigits[i] || '';
		}
		inputRefs[5]!.focus();
	}

	function handleChange() {
		code = code.map((digit) => (digit.match(/^\d$/) ? digit : ''));
	}
</script>

<div class="flex gap-3 my-3 align-center justify-center">
	{#each code as digit, index (index)}
		<input
			class="w-12 h-12 text-center border border-input bg-background rounded-lg focus:border-primary focus:border-2 focus:outline-none"
			type="text"
			bind:value={digit}
			bind:this={inputRefs[index]}
			on:input={(e) => handleInput(e, index)}
			on:keydown={(e) => handleKeyDown(e, index)}
			on:paste={(e) => handlePaste(e)}
			on:change={() => handleChange()}
		/>
	{/each}
</div>
