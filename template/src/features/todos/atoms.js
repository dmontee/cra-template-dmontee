import { atom } from "recoil";

const TODO_LIST_KEY = "todoListState";
const TODO_LIST_FILTER_KEY = "todoListFilterState";
const TODO_LIST_FILTERS = ["Show All", "Show Completed", "Show Incomplete"];

const todoListState = atom({
    key: TODO_LIST_KEY,
    default: [],
});

const todoListFilterState = atom({
    key: TODO_LIST_FILTER_KEY,
    default: TODO_LIST_FILTERS[0],
});

export { todoListFilterState, todoListState, TODO_LIST_FILTERS };
