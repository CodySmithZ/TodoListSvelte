import { writable } from "svelte/store";
import { browser } from "$app/environment";

const findNextID = (tasks) => {
	const taskIDs = tasks.map((task) => task.id);
	return Math.max(...taskIDs) + 1;
};

function manageLists() {
	const { subscribe, set, update } = writable([
		{
			name: "Project Delta",
			task: [
				{ id: 1, value: "Choose framework", isChecked: true },
				{ id: 2, value: "Pick color palette", isChecked: true },
				{ id: 3, value: "Pick font", isChecked: true },
				{ id: 4, value: "Implement new font", isChecked: false },
				{ id: 5, value: "Add dark mode", isChecked: false },
				{ id: 6, value: "Test performance", isChecked: false },
			],
		},
		{
			name: "Project Zulu Bugs",
			task: [
				{ id: 1, value: "Images not loading", isChecked: true },
				{
					id: 2,
					value: "Buttons not changing color on hover",
					isChecked: true,
				},
				{
					id: 3,
					value: "About us page not rendering",
					isChecked: false,
				},
				{ id: 4, value: "Text overflows in lists", isChecked: true },
				{
					id: 5,
					value: "Data not updating when added",
					isChecked: false,
				},
				{ id: 6, value: "User not remembered", isChecked: false },
				{ id: 7, value: "Text size not consistent", isChecked: false },
			],
		},
		{
			name: "Tracker",
			task: [
				{ id: 1, value: "Project Delta" },
				{ id: 2, value: "Project Zulu Bugs" },
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
		useLocalStorage: () => {
			if (browser) {
				const json = localStorage.getItem("lists");
				if (json) {
					set(JSON.parse(json));
				}
				subscribe((lists) => {
					localStorage.setItem("lists", JSON.stringify(lists));
				});
			}
		},
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
