<script>
	export let show = false;
</script>

{#if show}
	<div
		class="absolute z-10  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 px-10 py-5"
	>
		<slot />
	</div>
{/if}
