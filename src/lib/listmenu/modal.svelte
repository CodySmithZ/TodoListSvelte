<script>
	import { fly } from "svelte/transition";

	export let show = false;
	export let hideModal;
</script>

{#if show}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class="absolute inset-0 w-full flex backdrop-blur-sm  z-20 "
		on:click|self={hideModal}
		in:fly={{ y: -200, duration: 1000 }}
		out:fly={{ y: 200, duration: 1000 }}
	>
		<div
			class=" bg-secondary-background 
		rounded-md px-10 py-5 m-auto w-3/4 xs:w-1/3 md:w-1/2 lg:w-1/3 xl:w-1/4"
		>
			<slot />
		</div>
	</div>
{/if}
