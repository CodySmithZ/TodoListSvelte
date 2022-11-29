<script>
	import { lists } from "../stores.js";

	export let value;
	export let taskIndex;
	export let listIndex;
	export let isChecked;
	export let onDragStart;
	export let onDragEnter;
	export let onDrop;
	export let hoverIndex;

	let showRemove = false;

	const handleMouseOver = () => {
		showRemove = true;
	};

	const handleMouseOut = () => {
		showRemove = false;
	};

	const removeItem = () => {
		lists.removeTask(listIndex, taskIndex);
	};

	const changeCheckedState = () => {
		lists.updateCheckedState(listIndex, taskIndex, !isChecked);
	};
</script>

<div
	on:mouseover={handleMouseOver}
	on:mouseout={handleMouseOut}
	on:dragstart={(e) => onDragStart(e, taskIndex)}
	on:dragenter={(e) => onDragEnter(taskIndex)}
	on:drop|preventDefault={(e) => onDrop(e, taskIndex)}
	on:focus={null}
	on:blur={null}
	class={`flex flex-row border-2 border-black my-1 px-2 ${
		hoverIndex === taskIndex ? "bg-gray-500" : ""
	}`}
	draggable="true"
>
	<input type="checkbox" checked={isChecked} on:click={changeCheckedState} />

	<div class="">{value}</div>
	<button
		on:click={removeItem}
		on:mouseover={handleMouseOver}
		on:mouseout={handleMouseOut}
		on:focus={null}
		on:blur={null}>Remove</button
	>
</div>
