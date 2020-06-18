import { useMemo } from "react";
import { atom, useRecoilState } from "recoil";

const COUNTER_KEY = "counterState";

const counterState = atom({
    key: COUNTER_KEY,
    default: 0,
});

export default function useCount() {
    const [count, setCount] = useRecoilState(counterState);

    const api = useMemo(
        () => ({
            increment: () => setCount((prev) => prev + 1),
        }),
        [setCount]
    );

    return [count, api];
}

export { COUNTER_KEY as key, counterState as state };
