import { types } from "./actions";

export default function reducer(state = 0, action) {
    switch (action.type) {
        case types.INCREMENT:
            return state + 1;
        default:
            return state;
    }
}
