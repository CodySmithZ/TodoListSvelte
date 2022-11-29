<script>
	import { lists } from "../stores.js";
	import Modal from "./modal.svelte";
	import { createEventDispatcher } from "svelte";

	export let showModal = false;
	export let listIndex;

	let listName = $lists[listIndex].name;

	$: isValidText = listName === null || listName.match(/^ *$/) !== null;

	const updateListName = () => {
		lists.updateListName(listIndex, listName.trim());
		hideModal();
	};

	const dispatch = createEventDispatcher();
	const hideModal = () => {
		dispatch("hideModal");
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->

<Modal show={showModal}>
	<div class="flex flex-col space-y-1">
		<div class="text-center text-2xl">Rename</div>
		<input type="text" bind:value={listName} class="border-2 py-1 px-1" />
		<div class="flex flex-row justify-between">
			<button
				class="border-2 px-2 rounded-md bg-green-500"
				disabled={isValidText}
				on:click={updateListName}>Submit</button
			>
			<button
				class="border-2 px-2 rounded-md bg-gray-400"
				on:click={hideModal}>Cancel</button
			>
		</div>
	</div>
</Modal>
