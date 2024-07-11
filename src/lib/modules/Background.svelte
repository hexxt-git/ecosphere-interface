<script>
	const max = 20;
</script>

<div class="opacity-10 -z-10">
	{#each new Array(max) as _, x}
		{#each new Array(max) as _, y}
			{#if Math.random() > 0.65}
				<img
					src="/background/{Math.floor(Math.random() * 14)}.svg"
					alt=""
					class="fixed h-[200px] w-[200px]"
					style="
						top: {y * 300}px;
						left: {x * 300}px;
						transform: Rotate({Math.random() * 360}deg)
					"
				/>
			{/if}
		{/each}
	{/each}
</div>
