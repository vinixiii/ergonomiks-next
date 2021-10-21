import React from 'react';

import { WebsitePageContext } from './context';
import { Sidebar } from '../../common/Sidebar';
import { Header } from '../../common/Header';
import { Box } from '../../foundation/Box';

export default function WebsitePageWrapper({
  children,
  pageBoxProps,
  headerProps,
  sidebarProps,
}) {
  return (
    <WebsitePageContext.Provider value="">
      <Box display="flex" flex="1">
        {sidebarProps.display && <Sidebar />}
        <Box
          width="100%"
          display="flex"
          flexDirection="column"
          {...pageBoxProps}
        >
          {headerProps.display && <Header />}
          {children}
        </Box>
      </Box>
    </WebsitePageContext.Provider>
  );
}

WebsitePageWrapper.defaultProps = {
  headerProps: {
    display: true,
  },
  sidebarProps: {
    display: true,
  },
};
