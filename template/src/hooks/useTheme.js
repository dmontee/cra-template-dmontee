import { useMemo } from "react";

const THEME = "dark-theme";

function getDarkLocalStorage() {
    return window.localStorage.getItem(THEME);
}

function getClassName() {
    return document.getElementsByTagName("html")[0].className;
}

function setDarkTheme() {
    document.getElementsByTagName("html")[0].className = THEME;
    window.localStorage.setItem(THEME, THEME);
}

function toggleTheme() {
    if (getDarkLocalStorage()) {
        document.getElementsByTagName("html")[0].className = "";
        window.localStorage.setItem(THEME, "");
    } else {
        setDarkTheme();
    }
}

export default function useTheme() {
    const isDark = getDarkLocalStorage();

    if (isDark && !getClassName().includes(THEME)) {
        setDarkTheme();
    }

    const api = useMemo(
        () => ({
            toggleTheme,
        }),
        []
    );

    return [isDark, api];
}
