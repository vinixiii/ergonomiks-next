import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { Box } from '../../../foundation/Box';
import { Text } from '../../../foundation/Text';
import { Button } from '../../../common/Button';

export function DeleteConfirmation({ managerId }) {
  const { colors, borderRadius } = useContext(ThemeContext);

  console.log('managerId', managerId);
  return (
    <>
      <Box padding="24px 40px">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          padding="48px 0"
        >
          <Text>Are you sure you want to delete this manager?</Text>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="flex-end"
        gap="18px"
        padding="24px 40px"
        borderTop={`1px solid ${colors.border}`}
      >
        <Button del>Deletar</Button>
      </Box>
    </>
  );
}
