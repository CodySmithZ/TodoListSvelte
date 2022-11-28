import { writable } from "svelte/store";

function manageLists() {
	const { subscribe, set, update } = writable([
		{
			id: 1,
			task: [
				{ value: "item 1", isChecked: true },
				{ value: "item 2", isChecked: false },
			],
		},
		{
			id: 2,
			task: [
				{ value: "item 1", isChecked: true },
				{ value: "item 2", isChecked: true },
			],
		},
	]);

	return {
		subscribe,
		addList: (list) => update((lists) => [...lists, list]),
		removeList: (list) =>
			update((lists) => [...lists.filter((l) => l !== list)]),
		addTask: (listID, task) =>
			update((lists) =>
				lists.map((list) =>
					list.id === listID
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
		removeTask: (listID, taskID) =>
			update((lists) =>
				lists.map((list) =>
					list.id === listID
						? {
								...list,
								task: list.task.filter(
									(task, index) => index !== taskID
								),
						  }
						: list
				)
			),
		updateCheckedState: (listID, taskIndex, checkedValue) =>
			update((lists) =>
				lists.map((list) =>
					list.id === listID
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

// export const lists = writable([
// 	[{ id: 1, value: "List 1", checked: true }],
// 	[{ id: 2, value: "List 2", checked: true }],
// ]);

// export const listsS = writable([
// 	[{ id: 1, items: [{ id: 1, value: "List 1", checked: true }] }],
// 	[{ id: 2, value: "List 2", checked: true }],
// ]);
