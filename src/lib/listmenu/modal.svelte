<script>
	export let show = false;
	export let hideModal;
</script>

{#if show}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class="absolute inset-0 h-full w-full flex backdrop-blur-sm z-20"
		on:click|self={hideModal}
	>
		<div
			class=" bg-secondary-background 
		rounded-md px-10 py-5 w-2/12 m-auto"
		>
			<slot />
		</div>
	</div>
{/if}
