import React from 'react';
import { motion } from 'framer-motion';

import { ModalWrapper } from './styles/ModalWrapper';

export function Modal({ isOpen, onClose, children }) {
  return (
    <ModalWrapper
      isOpen={isOpen}
      onClick={(event) => {
        const isSafeArea = event.target.closest('[data-modal-safe-area="true"');

        if (!isSafeArea) onClose();
      }}
    >
      <motion.div
        variants={{
          open: {
            y: 0,
          },
          closed: {
            y: '100%',
          },
        }}
        animate={isOpen ? 'open' : 'closed'}
        transition={{
          duration: 0.3,
        }}
      >
        {children({ 'data-modal-safe-area': 'true' })}
      </motion.div>
    </ModalWrapper>
  );
}
