import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
const ThemeContextUpdate = createContext();

export function useTheme() {
    return useContext(ThemeContext);
}

export function useThemeUpdate() {
    return useContext(ThemeContextUpdate);
}

const ThemeProvider = ({ children }) => {

    const [toggled, setToggled] = useState(false);

    const handleSwitch = () => {
        setToggled(!toggled);
    }

    return (
        <ThemeContext.Provider value={toggled}>
            <ThemeContextUpdate.Provider value={handleSwitch}>
                {children}
            </ThemeContextUpdate.Provider>
        </ThemeContext.Provider>

    );
}

export default ThemeProvider;