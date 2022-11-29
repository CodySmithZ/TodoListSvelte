<script>
	import MdMoreHoriz from "svelte-icons/md/MdMoreHoriz.svelte";
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
<div on:click={toggleShowMenu} class="w-6 "><MdMoreHoriz /></div>
{#if showMenu}
	<div
		on:mouseleave={() => (showMenu = false)}
		class="absolute bg-primary border-2 border-alt left-32 top-8 rounded-md text-center elevation-2"
	>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			on:click={() => (showRenameModal = true)}
			class="px-7 py-2 hover:bg-alt hover:rounded-t-md border-b-2 border-alt cursor-pointer"
		>
			Rename
		</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			on:click={() => (showDeleteModal = true)}
			class="hover:bg-secondary hover:rounded-b-md text-red-600 px-7 py-2"
		>
			Delete
		</div>
	</div>
{/if}
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
