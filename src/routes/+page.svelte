<script>
	import List from "../lib/list/list.svelte";
	import { lists, selectedListIndex } from "../lib/stores.js";
	import ListSelector from "../lib/lists/listSelector.svelte";
	import AddList from "../lib/lists/addList.svelte";
	import AddItem from "../lib/list/addItem.svelte";
</script>

<div class="flex flex-col items-center">
	<div class="text-slate-200 text-5xl font-thin my-10">
		Todo List (with Svelte)
	</div>

	<div
		class="flex flex-row xl:w-7/12 lg:w-9/12 md:w-9/12 sm:w-10/12 w-full m-auto"
	>
		<div class=" mr-5 ml-2 mt-2 flex flex-col w-3/12 sm:w-4/12 md:w-3/12">
			<ListSelector />
			<div class="flex justify-between">
				<AddList />
			</div>
		</div>
		{#each $lists as list, i}
			{#if i === $selectedListIndex}
				<div class="w-full flex flex-col">
					<List {list} listIndex={i} />
					<AddItem listIndex={i} />
				</div>
			{/if}
		{/each}
	</div>
</div>
