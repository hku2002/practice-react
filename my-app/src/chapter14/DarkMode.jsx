import { useState, useCallback } from "react";
import ThemeContext from "./ThemeContext";
import MainContent from "./MainContent";

export default function DarkMode(props) {
    const [theme, setTheme] = useState("light");

    const toggleTheme = useCallback(() => {
        theme === "dark" ? setTheme("light") : setTheme("dark");
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <MainContent />
        </ThemeContext.Provider>
    )
}
