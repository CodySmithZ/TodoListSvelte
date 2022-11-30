<script>
	import MdMoreHoriz from "svelte-icons/md/MdMoreHoriz.svelte";
	import FaRegEdit from "svelte-icons/fa/FaRegEdit.svelte";
	import FaTrashAlt from "svelte-icons/fa/FaTrashAlt.svelte";
	import RenameModal from "./renameModal.svelte";
	import DeleteModal from "./deleteModal.svelte";

	export let listIndex;

	let showMenu = false;
	let showRenameModal = false;
	let showDeleteModal = false;
	const toggleShowMenu = () => {
		showMenu = !showMenu;
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div
	on:mouseenter={() => (showMenu = true)}
	on:mouseleave={() => (showMenu = false)}
>
	{#if !showMenu}
		<div on:click={toggleShowMenu} class="w-6">
			<MdMoreHoriz />
		</div>
	{/if}
	{#if showMenu}
		<div class="flex flex-row space-x-2 pr-1">
			<div on:click={() => (showRenameModal = true)} class="w-5 ">
				<FaRegEdit />
			</div>
			<div on:click={() => (showDeleteModal = true)} class="w-4 ">
				<FaTrashAlt />
			</div>
		</div>
	{/if}
</div>

<RenameModal
	{listIndex}
	showModal={showRenameModal}
	on:hideModal={() => (showRenameModal = false)}
/>
<DeleteModal
	{listIndex}
	showModal={showDeleteModal}
	on:hideModal={() => (showDeleteModal = false)}
/>
