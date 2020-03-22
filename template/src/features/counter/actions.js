import { action } from "typesafe-actions";

export const types = {
    ADD: "@counter/ADD",
};

const add = () => action(types.ADD);

export const actions = { add };
