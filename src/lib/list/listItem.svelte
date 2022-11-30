<script>
	import GoTrashcan from "svelte-icons/go/GoTrashcan.svelte";
	import FaGripLines from "svelte-icons/fa/FaGripLines.svelte";
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
	class={`flex flex-row  my-2 px-2 py-2 bg-secondary-background rounded-md
	${hoverIndex === taskIndex ? "bg-gray-500" : ""}`}
	draggable="true"
>
	<div class="flex w-full cursor-pointer items-center">
		<div class="w-3 text-slate-400 mr-2">
			<FaGripLines />
		</div>
		<input
			type="checkbox"
			checked={isChecked}
			on:click={changeCheckedState}
			class="w-4"
		/>

		<div
			class={`text-white text-lg font-thin ml-2 dash 
		${isChecked ? "line-through" : ""} `}
		>
			{value}
		</div>
	</div>
	<button
		on:click={removeItem}
		on:mouseover={handleMouseOver}
		on:mouseout={handleMouseOut}
		on:focus={null}
		on:blur={null}
		class="w-4 text-gray-500"><GoTrashcan /></button
	>
</div>
