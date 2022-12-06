<script>
	import List from "../lib/list/list.svelte";
	import { lists, selectedListIndex } from "../lib/stores.js";
	import ListSelector from "../lib/lists/listSelector.svelte";
	import AddList from "../lib/lists/addList.svelte";
	import AddItem from "../lib/list/addItem.svelte";

	lists.useLocalStorage();
</script>

<div class="flex flex-col items-center">
	<div class="text-slate-200 text-5xl font-thin my-10">
		Todo List (with Svelte)
	</div>

	<div
		class="flex flex-col sm:flex-row xl:w-7/12 lg:w-9/12 md:w-10/12 sm:w-11/12 px-5 sm:px-0 w-full m-auto space-y-10 sm:space-y-0"
	>
		<div class=" sm:mr-5 sm:ml-2 sm:mt-2 flex flex-col sm:w-3/12">
			<div class="truncate">
				<ListSelector />
			</div>
			<AddList />
		</div>
		<div class="sm:w-9/12">
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
</div>
