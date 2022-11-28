<script>
	import { lists } from "../stores.js";
	let item;
	export let listIndex;

	const addTask = () => {
		lists.addTask(listIndex, item);
		item = "";
	};

	const disableButton = () => {
		return item == "";
	};
</script>

<div>
	<input type="text" bind:value={item} />
	<button
		on:click={addTask}
		class={item == "" ? "text-gray-500" : "text-white-900"}>Add</button
	>
</div>
