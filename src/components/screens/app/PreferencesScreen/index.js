import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { Grid } from '../../../foundation/Grid';
import { Box } from '../../../foundation/Box';
import { Text } from '../../../foundation/Text';
import { TextField } from '../../../foundation/TextField';

function CompanyInfo() {
  const { colors, borderRadius } = useContext(ThemeContext);

  return (
    <Box>
      <Box
        padding="0 40px"
        backgroundColor={colors.secondaryBackground}
        borderRadius={borderRadius}
        borderBottom={`1px solid ${colors.border}`}
      >
        <Text lineHeight="80px" variant="subtitle">
          Account
        </Text>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        gap="16px"
        padding="22px 40px 40px"
        backgroundColor={colors.secondaryBackground}
      >
        <Box display="flex" flexDirection="column" gap="16px">
          <Text variant="paragraph2">Company name</Text>
          <TextField placeholder="4PEOPLE" />
        </Box>
        <Box display="flex" flexDirection="column" gap="16px">
          <Text variant="paragraph2">CNPJ</Text>
          <TextField placeholder="71.568.916/0001-90" />
        </Box>
        <Box display="flex" flexDirection="column" gap="16px">
          <Text variant="paragraph2">CEP</Text>
          <TextField placeholder="59012-256" />
        </Box>
        <Box display="flex" flexDirection="column" gap="16px">
          <Text variant="paragraph2">Email</Text>
          <TextField placeholder="rh@4people.com" />
        </Box>
        <Box display="flex" flexDirection="column" gap="16px">
          <Text variant="paragraph2">Password</Text>
          <TextField placeholder="**********" />
        </Box>
      </Box>
    </Box>
  );
}

export function PreferencesScreen() {
  const { colors, borderRadius } = useContext(ThemeContext);

  return (
    <Grid.Container marginTop="40px">
      <Grid.Row position="relative">
        <Grid.Column display={{ xs: 'none', md: 'flex' }} value={{ lg: 3 }}>
          <Box
            display="flex"
            flexDirection="column"
            flex="1"
            position="sticky"
            top="40px"
            maxHeight="184px"
            gap="16px"
            padding="22px 24px"
            backgroundColor={colors.secondaryBackground}
            borderRadius={borderRadius}
          >
            <Text lineHeight="36px">Account</Text>
            <Text lineHeight="36px">Language</Text>
            <Text lineHeight="36px">Theme</Text>
          </Box>
        </Grid.Column>

        <Grid.Column paddingBottom="702px" value={{ xs: 12, md: 9 }}>
          <Box display="flex" flex="1" flexDirection="column" gap="24px">
            <CompanyInfo />

            <Box>
              <Box
                padding="0 40px"
                backgroundColor={colors.secondaryBackground}
                borderRadius={borderRadius}
                borderBottom={`1px solid ${colors.border}`}
              >
                <Text lineHeight="80px" variant="subtitle">
                  Language
                </Text>
              </Box>

              <Box
                display="flex"
                flexDirection="column"
                gap="16px"
                padding="22px 40px 40px"
                backgroundColor={colors.secondaryBackground}
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  padding="0 12px"
                  backgroundColor={colors.tertiaryBackground}
                  borderRadius={borderRadius}
                >
                  <Text lineHeight="36px" variant="paragraph2">
                    English
                  </Text>
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  padding="0 12px"
                  backgroundColor={colors.primaryBackground}
                  borderRadius={borderRadius}
                >
                  <Text lineHeight="36px" variant="paragraph2">
                    Portuguese (Brasil)
                  </Text>
                </Box>
              </Box>
            </Box>

            <Box>
              <Box
                padding="0 40px"
                backgroundColor={colors.secondaryBackground}
                borderRadius={borderRadius}
                borderBottom={`1px solid ${colors.border}`}
              >
                <Text lineHeight="80px" variant="subtitle">
                  Theme
                </Text>
              </Box>

              <Box
                display="flex"
                flexDirection="column"
                gap="16px"
                padding="22px 40px 40px"
                backgroundColor={colors.secondaryBackground}
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  padding="0 12px"
                  backgroundColor={colors.tertiaryBackground}
                  borderRadius={borderRadius}
                >
                  <Text lineHeight="36px" variant="paragraph2">
                    Light
                  </Text>
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  padding="0 12px"
                  backgroundColor={colors.primaryBackground}
                  borderRadius={borderRadius}
                >
                  <Text lineHeight="36px" variant="paragraph2">
                    Dark
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid.Column>
      </Grid.Row>
    </Grid.Container>
  );
}
