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

<Modal show={showModal} {hideModal}>
	<div class="flex flex-col">
		<div class="text-center text-2xl mb-7">Delete {listName}?</div>
		<div class="flex flex-row justify-between">
			<button
				class="px-3 py-2 rounded-md bg-primary hover:bg-secondary active:bg-alt text-slate-400"
				on:click={hideModal}>Cancel</button
			>
			<button
				class="px-3 py-2 rounded-md bg-red-400 hover:bg-red-500 active:bg-red-900 text-slate-900"
				on:click={deleteList}
			>
				Delete</button
			>
		</div>
	</div>
</Modal>
