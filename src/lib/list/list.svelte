<script>
import ListItem from "./listItem.svelte"
import AddItem from "./addItem.svelte";

export let list;
</script>
<div>
    {@debug list}
    {#each list.task as item}
        <ListItem value={item.value}/>
    {/each}
    <AddItem listID={list.id}/>
</div>