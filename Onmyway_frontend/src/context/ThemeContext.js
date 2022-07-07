import React, { useState } from 'react';
import { THEME_OPTIONS } from '../constants/theme';

const ThemeContext = React.createContext()

const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(THEME_OPTIONS.LIGHT)

    const toggleTheme = () => {

    }
    return (
        <ThemeContext.Provider
            value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;


export const useTheme = () => {
    const { theme, toggleTheme } = React.useContext(ThemeContext)
    return {
        theme, toggleTheme
    }
}