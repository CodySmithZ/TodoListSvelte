<script>
import ListItem from "./listItem.svelte"
import AddItem from "./addItem.svelte";

export let list;
</script>
<div>
    {#each list.task as item, i}
        <ListItem value={item.value} taskIndex={i} listID={list.id} isChecked={item.isChecked}/>
    {/each}
    <AddItem listID={list.id}/>
</div>