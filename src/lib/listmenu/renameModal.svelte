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

<Modal show={showModal} hideModal={() => hideModal()}>
	<div class="flex flex-col space-y-5">
		<div class="text-center text-2xl">Rename</div>
		<input
			type="text"
			bind:value={listName}
			class=" py-2 px-2 outline-none rounded-md bg-secondary-background border-2 border-background"
			on:focus={showModal}
		/>
		<div class="flex flex-row justify-between">
			<button
				class="px-3 py-2 rounded-md bg-green-500 hover:bg-green-600 active:bg-green-700 text-slate-900"
				disabled={isValidText}
				on:click={updateListName}>Submit</button
			>
			<button
				class="px-3 py-2 rounded-md bg-primary hover:bg-secondary active:bg-alt text-slate-400"
				on:click={hideModal}>Cancel</button
			>
		</div>
	</div>
</Modal>
