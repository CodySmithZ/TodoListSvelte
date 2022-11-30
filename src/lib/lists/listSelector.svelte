<script>
	import { lists, selectedListIndex } from "../stores.js";
	import ListMenu from "../listmenu/listsMenu.svelte";

	const changeSelectedList = (listIndex) => {
		selectedListIndex.set(listIndex);
	};
</script>

<div class="bg-secondary-background rounded-md flex flex-col">
	{#each $lists as list, i}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class={`hover:bg-primary 
		
		cursor-pointer flex flex-row 
		justify-between px-1 text-slate-300 
		text-xl border-b-4 border-background
		py-2 items-center font-thin  truncate
		${i === $selectedListIndex ? "bg-secondary font-normal" : ""}
		${i === 0 ? "rounded-t-lg" : ""}
		`}
			on:click={() => changeSelectedList(i)}
		>
			{list.name}
			<ListMenu listIndex={i} />
		</div>
	{/each}
</div>
