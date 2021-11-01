import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { MdClose } from 'react-icons/md';

import { Button } from '../../common/Button';
import { Box } from '../../foundation/Box';
import { Grid } from '../../foundation/Grid';
import { Text } from '../../foundation/Text';
import { ManagerFormContent } from './FormContent';

export function RegisterManagerForm({ propsDoModal }) {
  const { colors, boxShadow, borderRadius } = useContext(ThemeContext);

  return (
    <Grid.Row flex="1" alignItems="center" justifyContent="center">
      <Grid.Column
        display="flex"
        flex="1"
        flexDirection="column"
        value={{ xs: 12, xl: 6 }}
      >
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          backgroundColor={colors.primaryBackground}
          boxShadow={boxShadow}
          borderRadius={borderRadius}
          {...propsDoModal}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            padding="24px 40px"
            borderBottom={`1px solid ${colors.border}`}
          >
            <Text tag="h2" variant="subtitle" color="primaryText">
              New manager
            </Text>
            <MdClose size="24" color={colors.secondaryText} />
          </Box>

          <Box
            display="flex"
            flex="1"
            flexDirection="column"
            padding="24px 40px"
          >
            <ManagerFormContent />
          </Box>

          <Box
            display="flex"
            justifyContent="flex-end"
            padding="24px 40px"
            borderTop={`1px solid ${colors.border}`}
          >
            <Button alignSelf="flex-end">Add</Button>
          </Box>
        </Box>
      </Grid.Column>
    </Grid.Row>
  );
}
