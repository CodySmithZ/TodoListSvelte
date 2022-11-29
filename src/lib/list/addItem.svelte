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

<div class="w-full py-2">
	<input
		type="text"
		bind:value={itemName}
		placeholder="Enter next task"
		class="text-white bg-secondary-background rounded-md w-[75%] py-2 px-2 outline-none font-thin text-lg"
	/>
	<button
		on:click={addTask}
		disabled={isValidText}
		class={`
		text-slate-300 bg-primary rounded-md pb-2 pt-2.5 w-[24.4%]
		${
			isValidText
				? "opacity-50 cursor-not-allowed"
				: "hover:bg-secondary active:bg-alt "
		}		
		`}>Add</button
	>
</div>
