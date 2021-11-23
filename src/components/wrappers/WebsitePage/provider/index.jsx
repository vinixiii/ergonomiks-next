import { GlobalThemeProvider } from '../../../../infra/contexts/ThemeContext';
import { GlobalStyle } from '../../../../theme/global';

export function WebsiteGlobalProvider({ children }) {
  return (
    <GlobalThemeProvider>
      <GlobalStyle />
      {children}
    </GlobalThemeProvider>
  );
}
