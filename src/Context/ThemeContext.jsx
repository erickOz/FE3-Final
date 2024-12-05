import { createContext, useState } from "react";

const ThemeState = createContext();

export const ThemeContext = ({ children }) => {
    const [theme, setTheme] = useState("light"); // Valor inicial del tema

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
export default ThemeContext

export const useThemeState = () => useContext(ThemeState);