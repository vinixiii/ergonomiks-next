import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { ModalWrapper } from './styles/ModalWrapper';
import { Grid } from '../../foundation/Grid';
import { Box } from '../../foundation/Box';
import { MdClose } from 'react-icons/md';
import { Text } from '../../foundation/Text';

export function Modal({ isOpen, onClose, title, children }) {
  const { colors, boxShadow, borderRadius } = useContext(ThemeContext);

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClick={(event) => {
        const isSafeArea = event.target.closest('[data-modal-safe-area="true"');

        if (!isSafeArea) onClose();
      }}
    >
      <div style={{ height: '100%' }}>
        <Grid.Row
          flex="1"
          alignItems="center"
          justifyContent="center"
          height="100%"
        >
          <Grid.Column
            display="flex"
            flex="1"
            flexDirection="column"
            maxWidth="650px"
            maxHeight="100%"
            value={{ xs: 12, xl: 6 }}
          >
            <Box
              display="flex"
              flex="1"
              flexDirection="column"
              backgroundColor={colors.primaryBackground}
              boxShadow={boxShadow}
              borderRadius={borderRadius}
              data-modal-safe-area="true"
              maxHeight="100%"
              overflowY="auto"
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                padding="24px 40px"
                borderBottom={`1px solid ${colors.border}`}
              >
                <Text tag="h2" variant="subtitle" color="primaryText">
                  {title}
                </Text>
                <MdClose className="icon close-icon" onClick={onClose} />
              </Box>

              <Box display="flex" flex="1" flexDirection="column">
                {children}
              </Box>
            </Box>
          </Grid.Column>
        </Grid.Row>
      </div>
    </ModalWrapper>
  );
}
