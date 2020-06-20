import { useMemo, useCallback } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";

import {
    todoListState,
    todoListFilterState,
    TODO_LIST_FILTERS,
} from "../features/todos/atoms";
import { filteredTodoListState } from "../features/todos/selectors";

function createTodo(text) {
    return { text, id: Math.round(Math.random() * 10000), completed: false };
}

export default function useTodoList() {
    const setTodoList = useSetRecoilState(todoListState);
    const setTodoFilterState = useSetRecoilState(todoListFilterState);
    const todoList = useRecoilValue(filteredTodoListState);

    const add = useCallback(
        (text) => {
            setTodoList((prev) => [
                ...prev,
                createTodo(text, prev.length, prev),
            ]);
        },
        [setTodoList]
    );

    const remove = useCallback(
        (id) => {
            setTodoList((prev) => {
                const index = prev.findIndex((x) => x.id === id);
                return [...prev.slice(0, index), ...prev.slice(index + 1)];
            });
        },
        [setTodoList]
    );

    const complete = useCallback(
        (id) => {
            setTodoList((prev) => {
                const index = prev.findIndex((x) => x.id === id);
                return [
                    ...prev.slice(0, index),
                    { ...prev[index], completed: true },
                    ...prev.slice(index + 1),
                ];
            });
        },
        [setTodoList]
    );

    const api = useMemo(
        () => ({
            add,
            remove,
            complete,
            showComplete: () => setTodoFilterState(TODO_LIST_FILTERS[1]),
            showIncomplete: () => setTodoFilterState(TODO_LIST_FILTERS[2]),
            showAll: () => setTodoFilterState(TODO_LIST_FILTERS[0]),
        }),
        [setTodoFilterState, add, remove, complete]
    );

    return [todoList, api];
}
