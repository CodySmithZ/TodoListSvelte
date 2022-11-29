<script>
	import { lists, selectedListIndex } from "../stores.js";
	import ListMenu from "../listmenu/listsMenu.svelte";

	const changeSelectedList = (listIndex) => {
		console.log(listIndex);

		selectedListIndex.set(listIndex);
	};
</script>

{#each $lists as list, i}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class="hover:bg-slate-500 cursor-pointer"
		on:click={() => changeSelectedList(i)}
	>
		{list.name}
		<ListMenu listIndex={i} />
	</div>
{/each}
