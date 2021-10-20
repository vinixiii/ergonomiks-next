import React from 'react';

import { WebsitePageContext } from './context';
import { Sidebar } from '../../common/Sidebar';
import { Header } from '../../common/Header';

export default function WebsitePageWrapper({
  children,
  headerProps,
  sidebarProps,
}) {
  return (
    <WebsitePageContext.Provider>
      <div style={{ display: 'flex', flex: 1 }}>
        {sidebarProps.display && <Sidebar />}
        <div style={{ width: '100%' }}>
          {headerProps.display && <Header />}
          {children}
        </div>
      </div>
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
