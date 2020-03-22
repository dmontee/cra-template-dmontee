import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { actions } from "../features/counter/actions";

export default function useCount() {
    const count = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const api = useMemo(
        () => ({
            add: () => dispatch(actions.add()),
        }),
        [dispatch]
    );

    return [count, api];
}
