import { action } from "typesafe-actions";

export const types = {
    INCREMENT: "@counter/INCREMENT",
};

const increment = () => action(types.INCREMENT);

export const actions = { increment };
