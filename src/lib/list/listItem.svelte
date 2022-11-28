<script>
	import { lists } from "../stores.js";

	export let value;
	export let taskIndex;
	export let listIndex;
	export let isChecked;

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
	on:focus={null}
	on:blur={null}
	class="flex flex-row "
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
