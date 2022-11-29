import { writable } from "svelte/store";

const findNextID = (tasks) => {
	const taskIDs = tasks.map((task) => task.id);
	return Math.max(...taskIDs) + 1;
};

function manageLists() {
	const { subscribe, set, update } = writable([
		{
			name: "List One",
			task: [
				{ id: 1, value: "item 1", isChecked: true },
				{ id: 2, value: "item 2", isChecked: false },
			],
		},
		{
			name: "List Two",
			task: [
				{ id: 1, value: "item 1d", isChecked: true },
				{ id: 2, value: "item 2d", isChecked: true },
			],
		},
	]);

	return {
		subscribe,
		addList: (listName) =>
			update((lists) => [...lists, { name: listName, task: [] }]),
		removeList: (listIndex) =>
			update((lists) => lists.filter((list, i) => i !== listIndex)),
		addTask: (listIndex, task) =>
			update((lists) =>
				lists.map((list, i) =>
					i === listIndex
						? {
								...list,
								task: [
									...list.task,
									{
										id: findNextID([...list.task]),
										value: task,
										checked: false,
									},
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
		updateListName: (listIndex, updatedListName) =>
			update((lists) =>
				lists.map((list, i) =>
					i === listIndex ? { ...list, name: updatedListName } : list
				)
			),
		moveTask: (listIndex, taskIndex, targetIndex) =>
			update((lists) =>
				lists.map((list, i) => {
					if (i === listIndex) {
						//Get task to move
						const tasktoMove = list.task[taskIndex];

						//Remove task from list
						const updatedTaskList = list.task.filter(
							(task) => task !== tasktoMove
						);

						//Insert task at target index
						updatedTaskList.splice(targetIndex, 0, tasktoMove);

						return {
							...list,
							task: updatedTaskList,
						};
					} else {
						return list;
					}
				})
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
