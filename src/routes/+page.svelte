<script>
	import List from "../lib/list/list.svelte";
	import { lists, selectedListIndex } from "../lib/stores.js";
	import ListSelector from "../lib/lists/listSelector.svelte";
	import AddList from "../lib/lists/addList.svelte";
</script>

<div class="flex flex-row w-7/12  m-auto">
	<div class=" mr-5 ml-2 mt-2 w-1/4">
		<ListSelector />
		<AddList />
	</div>
	{#each $lists as list, i}
		{#if i === $selectedListIndex}
			<div class="w-3/4">
				<List {list} listIndex={i} />
			</div>
		{/if}
	{/each}
</div>
