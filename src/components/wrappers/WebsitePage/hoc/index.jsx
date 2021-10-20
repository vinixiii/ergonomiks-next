import React from 'react';
import { WebsiteGlobalProvider } from '../provider';
import WebsitePageWrapper from '..';

export function websitePageHOC(
  PageComponent,
  { pageWrapperProps } = { pageWrapperProps: {} }
) {
  // Pegas as props do Next e repassa para o PageComponent
  return (props) => (
    // Providers gerais da aplicação, como por exemplo o ThemeProvider
    <WebsiteGlobalProvider>
      {/* Componente que possui elementos que são comuns em toda a página */}
      <WebsitePageWrapper {...pageWrapperProps}>
        <PageComponent {...props} />
      </WebsitePageWrapper>
    </WebsiteGlobalProvider>
  );
}
