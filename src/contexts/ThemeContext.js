import React, { useContext, useState, createContext } from 'react';
import { StatusBar } from 'react-native';
import {lightColors, darkColors, darkIcons, lightIcons} from '../styles/colorThemes';

export const ThemeContext = createContext({
    isDark: false,
    colors: darkColors,
    icons: darkIcons,
    setScheme: () => {},
});

export const ThemeProvider = ({children}) => {

    const [isDark, setIsDark] = useState(true);

    const defaultTheme = {
        isDark,
        // Chaning color schemes according to theme
        colors: isDark ? darkColors : lightColors,
        icons: isDark ? darkIcons : lightIcons,
        // Overrides the isDark value will cause re-render inside the context.  
        setScheme: (scheme) => setIsDark(scheme),
    };

  return (
        <ThemeContext.Provider value={defaultTheme}>
            <StatusBar BarStyle={isDark ? 'light-content' : 'dark-content'} hidden={false} />
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook to get the theme object returns {isDark, colors, setScheme}
export const useTheme = () => useContext(ThemeContext);