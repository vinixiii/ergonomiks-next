import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { MdOutlineAddAPhoto } from 'react-icons/md';

import { Box } from '../../../foundation/Box';
import { Text } from '../../../foundation/Text';
import { TextField } from '../../../foundation/TextField';
import { Button } from '../../../common/Button';

export function ManagerFormContent() {
  const { colors, borderRadius } = useContext(ThemeContext);

  return (
    <form>
      <Text
        tag="h3"
        variant="paragraph1"
        color="primaryText"
        marginBottom="16px"
      >
        Photo
      </Text>
      <Box
        display="flex"
        flexDirection="column"
        gap="18px"
        justifyContent="center"
        alignItems="center"
        border={`1px solid ${colors.border}`}
        borderRadius={borderRadius}
        marginBottom="16px"
      >
        <Box padding="48px" display="flex" flexDirection="column" gap="18px">
          <Box
            width="147px"
            height="147px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="18px"
            border={`1px dashed ${colors.primary}`}
            borderRadius={borderRadius}
            textAlign="center"
            color={colors.secondaryText}
          >
            <MdOutlineAddAPhoto size="48" color={colors.primary} />
            <Text variant="paragraph3">No image chosen yet</Text>
          </Box>
          <Button type="button">Chose file</Button>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        gap="16px"
        flexWrap="wrap"
      >
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          gap="16px"
          minWidth="180px"
        >
          <Text tag="h3" variant="paragraph1" color="primaryText">
            General info
          </Text>
          <TextField placeholder="First Name" />
          <TextField placeholder="Last Name" />
          <TextField placeholder="Phone" />
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          gap="16px"
          minWidth="180px"
        >
          <Text tag="h3" variant="paragraph1" color="primaryText">
            Email and password
          </Text>
          <TextField placeholder="Email" />
          <TextField placeholder="Password" />
        </Box>
      </Box>
    </form>
  );
}
