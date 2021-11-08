import React, { useState } from 'react';

import { WebsitePageContext } from './context';
import { Header } from '../../common/Header';
import { Box } from '../../foundation/Box';
import { RegisterManagerForm } from '../../forms/RegisterManagerForm';

export default function WebsitePageWrapper({
  children,
  pageBoxProps,
  headerProps,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <WebsitePageContext.Provider
      value={{
        isModalOpen: isModalOpen,
        toggleRegisterManagerModal: () => setIsModalOpen(!isModalOpen),
      }}
    >
      <Box display="flex" flex="1">
        <Box display="flex" flex="1" flexDirection="column" {...pageBoxProps}>
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
};
