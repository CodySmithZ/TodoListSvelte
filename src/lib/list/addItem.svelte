<script>
    import {lists} from "../stores.js"
    let item;
    export let listID;
</script>
<div>
    {@debug listID}
    <input type="text" bind:value={item}/>
    <button on:click={lists.addTask(listID, item)}>Add</button>
</div>