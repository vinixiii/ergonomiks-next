import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../../../../theme/global';
import { lightMode, darkMode } from '../../../../theme';

export function WebsiteGlobalProvider({ children }) {
  return (
    <ThemeProvider theme={lightMode}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
