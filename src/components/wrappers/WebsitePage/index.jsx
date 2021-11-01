import React, { useState } from 'react';

import { WebsitePageContext } from './context';
import { Sidebar } from '../../common/Sidebar';
import { Header } from '../../common/Header';
import { Box } from '../../foundation/Box';
import { Modal } from '../../common/Modal';
import { RegisterManagerForm } from '../../forms/RegisterManagerForm';

export default function WebsitePageWrapper({
  children,
  pageBoxProps,
  headerProps,
  sidebarProps,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <WebsitePageContext.Provider
      value={{
        toggleRegisterManagerModal: () => setIsModalOpen(!isModalOpen),
      }}
    >
      <Box display="flex" flex="1">
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          {(propsDoModal) => (
            <RegisterManagerForm propsDoModal={propsDoModal} />
          )}
        </Modal>
        {/* {sidebarProps.display && <Sidebar />} */}
        <Box display="flex" flexDirection="column" {...pageBoxProps}>
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
