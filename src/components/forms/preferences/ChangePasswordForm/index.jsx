import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Button } from '../../../common/Button';

import { Box } from '../../../foundation/Box';
import { Text } from '../../../foundation/Text';
import { TextField } from '../../../foundation/TextField';

export function ChangePasswordForm() {
  const { colors } = useContext(ThemeContext);

  return (
    <form autoComplete="off">
      <Box display="flex" flexDirection="column" gap="16px" padding="24px 40px">
        <Box display="flex" flexDirection="column" gap="16px">
          <Text variant="paragraph2" color="primaryText">
            Current password
          </Text>
          <TextField type="password" />
        </Box>
        <Box display="flex" flexDirection="column" gap="16px">
          <Text variant="paragraph2" color="primaryText">
            New password
          </Text>
          <TextField type="password" />
        </Box>
        <Box display="flex" flexDirection="column" gap="16px">
          <Text variant="paragraph2" color="primaryText">
            Confirm new password
          </Text>
          <TextField type="password" />
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="flex-end"
        padding="24px 40px"
        borderTop={`1px solid ${colors.border}`}
      >
        <Button>Change</Button>
      </Box>
    </form>
  );
}
