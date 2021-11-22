import React, { useState } from 'react';

import { WebsitePageContext } from './context';
import { Header } from '../../common/Header';
import { Box } from '../../foundation/Box';
import Footer from '../../common/Footer';

export default function WebsitePageWrapper({
  children,
  pageBoxProps,
  headerProps,
  footerProps,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTipsModalOpen, setIsTipsModalOpen] = useState(false);

  return (
    <WebsitePageContext.Provider
      value={{
        isModalOpen: isModalOpen,
        toggleModal: () => setIsModalOpen(!isModalOpen),
        isTipsModalOpen: isTipsModalOpen,
        toggleTipsModal: () => setIsTipsModalOpen(!isTipsModalOpen),
      }}
    >
      <Box display="flex" flex="1" flexDirection="column">
        {headerProps.display && <Header />}
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          marginTop={headerProps.display ? '80px' : undefined}
          {...pageBoxProps}
        >
          {children}
        </Box>
        {footerProps.display && <Footer />}
      </Box>
    </WebsitePageContext.Provider>
  );
}

WebsitePageWrapper.defaultProps = {
  headerProps: {
    display: true,
  },
  footerProps: {
    display: false,
  },
};
