import { useMemo, useRef, useCallback } from "react";

const THEME = "dark-theme";

function setTheme(isDark = false) {
    const theme = isDark ? THEME : "";
    document.getElementsByTagName("html")[0].className = theme;
    window.localStorage.setItem(THEME, theme);
    return isDark;
}

function getIsDark() {
    return window.localStorage.getItem(THEME) === THEME;
}

export default function useTheme() {
    const isDark = useRef(setTheme(getIsDark()));

    const toggle = useCallback(() => {
        isDark.current = setTheme(!isDark.current);
    }, []);

    const api = useMemo(
        () => ({
            toggle,
        }),
        [toggle]
    );

    return [isDark.current, api];
}
