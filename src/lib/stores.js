import { writable } from "svelte/store";

function manageLists() {
	const { subscribe, set, update } = writable([
		{
			name: "List One",
			task: [
				{ value: "item 1", isChecked: true },
				{ value: "item 2", isChecked: false },
			],
		},
		{
			name: "List Two",
			task: [
				{ value: "item 1d", isChecked: true },
				{ value: "item 2d", isChecked: true },
			],
		},
	]);

	return {
		subscribe,
		addList: (listName) =>
			update((lists) => [...lists, { name: listName, task: [] }]),
		removeList: (list) =>
			update((lists) => [...lists.filter((l) => l !== list)]),
		addTask: (listIndex, task) =>
			update((lists) =>
				lists.map((list, i) =>
					i === listIndex
						? {
								...list,
								task: [
									...list.task,
									{ value: task, checked: false },
								],
						  }
						: list
				)
			),
		removeTask: (listIndex, taskID) =>
			update((lists) =>
				lists.map((list, i) =>
					i === listIndex
						? {
								...list,
								task: list.task.filter(
									(task, index) => index !== taskID
								),
						  }
						: list
				)
			),
		updateCheckedState: (listIndex, taskIndex, checkedValue) =>
			update((lists) =>
				lists.map((list, i) =>
					i === listIndex
						? {
								...list,
								task: list.task.map((task, index) =>
									index === taskIndex
										? {
												...task,
												isChecked: checkedValue,
										  }
										: task
								),
						  }
						: list
				)
			),
	};
}

export const lists = manageLists();

export const selectedListIndex = writable(1);

// export const lists = writable([
// 	[{ id: 1, value: "List 1", checked: true }],
// 	[{ id: 2, value: "List 2", checked: true }],
// ]);

// export const listsS = writable([
// 	[{ id: 1, items: [{ id: 1, value: "List 1", checked: true }] }],
// 	[{ id: 2, value: "List 2", checked: true }],
// ]);
