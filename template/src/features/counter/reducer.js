import { types } from "./actions";

export default function reducer(state = 0, action) {
    switch (action.type) {
        case types.ADD:
            return (state += 1);
        default:
            return state;
    }
}
