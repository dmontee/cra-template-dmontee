import { selector } from "recoil";

import { TODO_LIST_FILTERS, todoListFilterState, todoListState } from "./atoms";

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

export { filteredTodoListState };
