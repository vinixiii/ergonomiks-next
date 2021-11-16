import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import { Grid } from '../../../foundation/Grid';
import { Box } from '../../../foundation/Box';
import { Logo } from '../../../img/Logo';
import { Text } from '../../../foundation/Text';
import { LoginForm } from '../../../forms/LoginForm';
import { Link } from '../../../common/Link';

export function LoginScreen() {
  const { t } = useTranslation('login');

  const { colors, borderRadius, boxShadow } = useContext(ThemeContext);

  return (
    <Grid.Container display="flex" flex="1" alignItems="center">
      <Grid.Row flex="1" alignItems="center" justifyContent="center">
        <Grid.Column
          display="flex"
          flex="1"
          flexDirection="column"
          value={{ xs: 12, md: 8, xl: 5 }}
        >
          <Box
            padding="48px"
            backgroundColor={colors.primaryBackground}
            borderRadius={borderRadius}
            boxShadow={boxShadow}
          >
            <Link href="/" display="flex" alignItems="center">
              <Logo
                primaryColor={colors.primary}
                secondaryColor={colors.primaryText}
              />
            </Link>
            <Text
              tag="h1"
              variant="title2"
              color="primaryText"
              marginTop="48px"
              marginBottom="24px"
            >
              {t('sign_in')}
            </Text>
            <LoginForm />
          </Box>
        </Grid.Column>
      </Grid.Row>
    </Grid.Container>
  );
}
