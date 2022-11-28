<script>
	import { lists, selectedListIndex } from "./stores.js";

	let listName = "";

	$: isValidText = listName === null || listName.match(/^ *$/) !== null;
	const addList = () => {
		lists.addList(listName.trim());
		selectedListIndex.set($lists.length - 1);
	};
</script>

<input type="text" class="border-black border-2" bind:value={listName} />
<button disabled={isValidText} on:click={() => addList()}>+</button>
