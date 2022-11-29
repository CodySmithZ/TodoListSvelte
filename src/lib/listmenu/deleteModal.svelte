<script>
	import { lists } from "../stores.js";
	import Modal from "./modal.svelte";
	import { createEventDispatcher, tick } from "svelte";

	export let showModal = false;
	export let listIndex;

	let listName = $lists[listIndex].name;

	const deleteList = () => {
		hideModal();
		lists.removeList(listIndex);
	};

	const dispatch = createEventDispatcher();
	const hideModal = () => {
		dispatch("hideModal");
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->

<Modal show={showModal}>
	<div class="flex flex-col space-y-1">
		<div class="text-center text-2xl">Delete {listName}?</div>
		<div class="flex flex-row justify-between">
			<button
				class="border-2 px-2 rounded-md bg-blue-500"
				on:click={hideModal}>Cancel</button
			>
			<button
				class="border-2 px-2 rounded-md bg-red-400"
				on:click={deleteList}
			>
				Delete</button
			>
		</div>
	</div>
</Modal>
