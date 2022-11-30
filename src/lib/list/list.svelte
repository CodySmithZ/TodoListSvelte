<script>
	import { lists } from "../stores.js";
	import { flip } from "svelte/animate";

	import ListItem from "./listItem.svelte";
	import AddItem from "./addItem.svelte";

	export let list;
	export let listIndex;
	let hoverIndex;

	const onDragStart = (e, taskIndex) => {
		e.dataTransfer.effectAllowed = "move";
		e.dataTransfer.dropEffect = "move";
		e.dataTransfer.setData("text/plain", taskIndex);
	};

	const onDrop = (e, targetID) => {
		e.dataTransfer.dropEffect = "move";

		const taskID = e.dataTransfer.getData("text/plain");
		lists.moveTask(listIndex, taskID, targetID);
		hoverIndex = null;
	};
</script>

<div
	on:dragover|preventDefault={() => {
		return false;
	}}
>
	{#each list.task as item, i (item)}
		<div animate:flip>
			<ListItem
				value={item.value}
				taskIndex={i}
				{listIndex}
				{hoverIndex}
				isChecked={item.isChecked}
				{onDragStart}
				{onDrop}
				onDragEnter={(taskIndex) => (hoverIndex = taskIndex)}
			/>
		</div>
	{/each}
</div>
