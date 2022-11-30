<script>
	import MdAdd from "svelte-icons/md/MdAdd.svelte";
	import { lists, selectedListIndex } from "../stores.js";

	let listName = "";

	$: isValidText = listName === null || listName.match(/^ *$/) !== null;
	const addList = () => {
		lists.addList(listName.trim());
		selectedListIndex.set($lists.length - 1);
		listName = "";
	};
</script>

<input
	type="text"
	bind:value={listName}
	placeholder="Enter list name"
	class="bg-secondary-background text-xl 
	text-slate-400 font-thin rounded-bl-md 
	pl-2 pb-3 pt-2 outline-none w-3/4"
/>
<button disabled={isValidText} on:click={() => addList()} class=""
	><div
		class={` bg-primary rounded-full w-11
		${
			isValidText
				? "opacity-50 cursor-not-allowed"
				: "hover:bg-secondary active:bg-alt"
		}
		`}
	>
		<MdAdd />
	</div></button
>
