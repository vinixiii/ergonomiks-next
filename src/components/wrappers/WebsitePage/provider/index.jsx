import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../../../../theme/global';
import { lightMode, darkMode } from '../../../../theme';

import { usePersistedState } from '../../../../infra/hooks/usePersistedState';

export function WebsiteGlobalProvider({ children }) {
  const [theme, setTheme] = usePersistedState('theme', 'light');

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightMode : darkMode}>
      <button onClick={toggleTheme}>Teste</button>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
