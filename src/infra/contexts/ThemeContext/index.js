import { createContext } from 'react';
import { ThemeProvider } from 'styled-components';

import { usePersistedState } from '../../hooks/usePersistedState';
import { lightMode, darkMode } from '../../../theme';

export const GlobalThemeContext = createContext();

export function GlobalThemeProvider({ children }) {
  const [theme, setTheme] = usePersistedState('theme', 'light');

  return (
    <GlobalThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme === 'light' ? lightMode : darkMode}>
        {children}
      </ThemeProvider>
    </GlobalThemeContext.Provider>
  );
}
