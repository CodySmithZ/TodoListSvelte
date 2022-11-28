<script>
	import ListItem from "./listItem.svelte";
	import AddItem from "./addItem.svelte";

	export let list;
	export let listIndex;
</script>

<div>
	{#each list.task as item, i}
		<ListItem
			value={item.value}
			taskIndex={i}
			{listIndex}
			isChecked={item.isChecked}
		/>
	{/each}
	<AddItem {listIndex} />
</div>
