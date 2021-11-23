import React from 'react';

import { Box } from '../../../../foundation/Box';
import { Text } from '../../../../foundation/Text';
import { TextField } from '../../../../foundation/TextField';

export function ManagerDashboardScreen() {
  return (
    <Box display="flex" flex="1" justifyContent="center">
      <Box display="flex" flex="1" flexDirection="column" maxWidth="1366px">
        <Box padding="40px 16px">
          <Text variant="paragraph1" color="primaryText">
            Manager dashboard
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
