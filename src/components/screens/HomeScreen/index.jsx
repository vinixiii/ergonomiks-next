import React from 'react';
import { useTranslation } from 'next-i18next';

import { Grid } from '../../foundation/Grid';
import { Box } from '../../foundation/Box';
import { Text } from '../../foundation/Text';
import { Button } from '../../common/Button';

export function HomeScreen() {
  const { t } = useTranslation('common');

  return (
    <Grid.Container>
      <Grid.Row margin="120px 0">
        <Grid.Column
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          gap="24px"
        >
          <Text variant="title" color="primaryText">
            {t('banner_title')}
          </Text>
          <Text variant="paragraph1" color="primaryText">
            {t('banner_subtitle')}
          </Text>
          <Box marginTop="24px">
            <Button>{t('btn_contact_us')}</Button>
          </Box>
        </Grid.Column>
        <Grid.Column>
          <img
            src="/img/banner-illustration.svg"
            alt="Illustration of a girl with a notebook"
          />
        </Grid.Column>
      </Grid.Row>
    </Grid.Container>
  );
}
