import { ThemeProvider } from 'styled-components';

import { theme } from '../../../../theme';
import { GlobalStyle } from '../../../../theme/global';

export function WebsiteGlobalProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
