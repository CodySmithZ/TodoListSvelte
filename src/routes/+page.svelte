<script>
	import List from "../lib/list/list.svelte";
	import { lists, selectedListIndex } from "../lib/stores.js";
	import ListSelector from "../lib/list/listSelector.svelte";
	import AddList from "../lib/addList.svelte";
</script>

<div>
	{#each $lists as list, i}
		{#if i === $selectedListIndex}
			<List {list} listIndex={i} />
		{/if}
	{/each}
	<ListSelector />
	<AddList />
</div>
