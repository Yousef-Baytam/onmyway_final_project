import React, { useState } from 'react';
import THEME_OPTIONS from '../constants/theme';
import storage from '../storage/asyncStorage';

const ThemeContext = React.createContext()

const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(THEME_OPTIONS.LIGHT)

    const toggleTheme = async () => {
        setTheme(theme == THEME_OPTIONS.LIGHT ? THEME_OPTIONS.DARK : THEME_OPTIONS.LIGHT)
        await storage.save({ key: 'theme', data: theme == THEME_OPTIONS.LIGHT ? 'DARK' : 'LIGHT' })
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