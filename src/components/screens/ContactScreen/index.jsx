import React from 'react';
import { useTranslation } from 'next-i18next';

import { Grid } from '../../foundation/Grid';
import { Box } from '../../foundation/Box';
import { Text } from '../../foundation/Text';
import { TextField } from '../../foundation/TextField';
import { Button } from '../../common/Button';

export function ContactScreen() {
  const { t } = useTranslation('contact');

  return (
    <Grid.Container>
      <Grid.Row padding={{ xs: '32px 0', lg: '64px 0' }}>
        <Grid.Column
          display="flex"
          flexDirection="column"
          gap="94px"
          paddingTop="32px"
          paddingBottom="32px"
          value={{ xs: 12, lg: 6 }}
        >
          <Box>
            <Text
              tag="h1"
              marginBottom="24px"
              variant="title"
              color="primaryText"
            >
              {t('title')}
            </Text>
            <Text variant="paragraph1" color="primaryText">
              {t('subtitle')}
            </Text>
          </Box>
          <img
            src="/img/contact-illustration.svg"
            alt="Girl with a letter on her hands"
            style={{ display: 'block', margin: 'auto', maxWidth: '100%' }}
          />
        </Grid.Column>
        <Grid.Column
          display="flex"
          flexDirection="column"
          paddingTop="32px"
          paddingBottom="32px"
          gap="48px"
          value={{ xs: 12, lg: 6 }}
        >
          <Box display="flex" flexDirection="column" gap="16px">
            <TextField placeholder={t('placeholder')} />
            <TextField placeholder={t('placeholder2')} />
            <TextField placeholder={t('placeholder3')} />
            <TextField placeholder={t('placeholder4')} />
            <TextField placeholder={t('placeholder5')} />
            <TextField
              tag="textarea"
              minHeight="90px"
              // resize="none"
              placeholder={t('placeholder6')}
            />
          </Box>
          <Button alignSelf={{ md: 'flex-end' }}>{t('btn_submit')}</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid.Container>
  );
}
