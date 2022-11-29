<script>
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
<div on:click={toggleShowMenu} class="bg-red-900">...</div>
{#if showMenu}
	<div on:mouseleave={() => (showMenu = false)}>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div on:click={() => (showRenameModal = true)}>Rename</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			on:click={() => (showDeleteModal = true)}
			class="hover:bg-gray-400 text-red-600"
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
