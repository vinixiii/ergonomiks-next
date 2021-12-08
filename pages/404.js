import React from 'react';

import { websitePageHOC } from '../src/components/wrappers/WebsitePage/hoc';

function Error404() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1 style={{ textAlign: 'center' }}>Page not found - Error 404</h1>
      <img src="https://c.tenor.com/K6aPMqQsGkUAAAAC/shoot-gift.gif" />
    </div>
  );
}

export default websitePageHOC(Error404, {
  pageWrapperProps: {
    headerProps: { display: false },
    footerProps: { display: false },
  },
});
