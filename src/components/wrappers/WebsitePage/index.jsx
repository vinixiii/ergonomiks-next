import React, { useState } from 'react';

import { WebsitePageContext } from './context';
import { Sidebar } from '../../common/Sidebar';
import { Header } from '../../common/Header';
import { Box } from '../../foundation/Box';
import { Modal } from '../../common/Modal';

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
            <div style={{ background: 'white' }} {...propsDoModal}>
              <h1>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam consequatur alias eveniet voluptatem quo, at odit
                soluta nisi, placeat aut excepturi incidunt iure sunt
                doloremque, quisquam exercitationem nesciunt harum debitis!
              </h1>
            </div>
          )}
        </Modal>
        {sidebarProps.display && <Sidebar />}
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
