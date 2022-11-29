<script>
	import { lists } from "../stores.js";

	export let listIndex;
	let itemName = "";
	$: isValidText = itemName === null || itemName.match(/^ *$/) !== null;

	const addTask = () => {
		lists.addTask(listIndex, itemName);
		itemName = "";
	};

	const disableButton = () => {
		return item == "";
	};
</script>

<div>
	<input type="text" bind:value={itemName} />
	<button on:click={addTask} disabled={isValidText}>Add</button>
</div>
