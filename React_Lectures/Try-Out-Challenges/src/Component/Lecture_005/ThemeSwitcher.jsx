import { useState } from "react";
import ThemeToggler from "./ThemeToggler";
import useToggle from "../../../../../React_Classworks/src/custom-state/useToggle";

export default function ThemeSwitcher() {
    const [isDarkMode, setTheme] = useToggle(false);
    const themeColors = {
        backgroundColor: isDarkMode ? "#1a1a1a" : "#ffffff",
        color: isDarkMode ? "#ffffff" : "#1a1a1a",
        fill: isDarkMode ? "#ffffff" : "#1a1a1a",
        borderRadius: "12px"
    }
    const divStyle = { minWidth: "150px", minHeight: "150px", borderRadius: "12px", fontSize: "20px", padding: "1rem", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold", transition: "all ease-in-out 0.3s" };

    // function handleTheme(e) {
    //     setTheme(theme => !theme);
    // }

    return (
        <div style={themeColors}>
            <ThemeToggler mode={isDarkMode} action={setTheme}/>
            <div style={divStyle}>{isDarkMode ? "Dark Mode" : "Light Mode"}</div>
        </div>
    );
}