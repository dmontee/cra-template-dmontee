import { useMemo } from "react";
import { atom, selector, useSetRecoilState, useRecoilValue } from "recoil";

const TODO_LIST_KEY = "todoListState";

const todoListState = atom({
    key: TODO_LIST_KEY,
    default: [],
});

const TODO_LIST_FILTER_KEY = "todoListFilterState";
const TODO_LIST_FILTERS = ["Show All", "Show Completed", "Show Incomplete"];

const todoListFilterState = atom({
    key: TODO_LIST_FILTER_KEY,
    default: TODO_LIST_FILTERS[0],
});

const TODO_SELECTOR_KEY = "filteredTodoSelector";

const filteredTodoListState = selector({
    key: TODO_SELECTOR_KEY,
    get: ({ get }) => {
        const filter = get(todoListFilterState);
        const list = get(todoListState);

        switch (filter) {
            case TODO_LIST_FILTERS[1]:
                return list.filter((x) => x.completed);
            case TODO_LIST_FILTERS[2]:
                return list.filter((x) => !x.completed);
            default:
                return list;
        }
    },
});

function createTodo(text) {
    return { text, id: Math.random() * 10000, completed: false };
}

export default function useCount() {
    const setTodoList = useSetRecoilState(todoListState);
    const setTodoFilterState = useSetRecoilState(todoListFilterState);
    const todoList = useRecoilValue(filteredTodoListState);

    const api = useMemo(
        () => ({
            add: (text) =>
                setTodoList((prev) => [
                    ...prev,
                    createTodo(text, prev.length, prev),
                ]),
            remove: (index) =>
                setTodoList((prev) => [
                    ...prev.slice(0, index),
                    ...prev.slice(index + 1),
                ]),
            complete: (index) =>
                setTodoList((prev) => [
                    ...prev.slice(0, index),
                    { ...prev[index], completed: true },
                    ...prev.slice(index + 1),
                ]),

            // Update filter list state
            showComplete: () => setTodoFilterState(TODO_LIST_FILTERS[1]),
            showIncomplete: () => setTodoFilterState(TODO_LIST_FILTERS[2]),
            showAll: () => setTodoFilterState(TODO_LIST_FILTERS[0]),
        }),
        [setTodoList, setTodoFilterState]
    );

    return [todoList, api];
}

export { TODO_LIST_KEY as key, todoListState as state };
