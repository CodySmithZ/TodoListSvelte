<script>
	import List from "../lib/list/list.svelte";
    import {lists} from "../lib/stores.js";


</script>
<div>
    {#each $lists as list}
        <List list={list}/>
    {/each}
</div>