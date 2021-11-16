import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useTranslation } from 'next-i18next';

import { Grid } from '../../foundation/Grid';
import { Box } from '../../foundation/Box';
import { Text } from '../../foundation/Text';
import { Button } from '../../common/Button';

export function HomeScreen() {
  const { colors } = useContext(ThemeContext);
  const { t } = useTranslation('common');

  return (
    <>
      <Grid.Container>
        <Grid.Row padding={{ xs: '32px 0', lg: '64px 0' }}>
          <Grid.Column
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems={{ xs: 'center', lg: 'flex-start' }}
            textAlign={{ xs: 'center', lg: 'initial' }}
            gap="24px"
            paddingTop="32px"
            paddingBottom="32px"
            value={{ xs: 12, lg: 6 }}
          >
            <Text variant="title" color="primaryText">
              {t('banner_title')}
            </Text>
            <Text variant="paragraph1" color="primaryText">
              {t('banner_subtitle')}
            </Text>
            <Box marginTop="24px">
              <Button href="/contact">{t('btn_contact_us')}</Button>
            </Box>
          </Grid.Column>
          <Grid.Column
            paddingTop="32px"
            paddingBottom="32px"
            value={{ xs: 12, lg: 6 }}
          >
            <img
              style={{ display: 'block', margin: 'auto', maxWidth: '100%' }}
              src="/img/banner-illustration.svg"
              alt="Illustration of a girl with a notebook"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid.Container>
      <Box backgroundColor={colors.primaryBackground}>
        <Grid.Container>
          <Grid.Row
            flexWrap="wrap-reverse"
            padding={{ xs: '32px 0', lg: '64px 0' }}
          >
            <Grid.Column
              paddingTop="32px"
              paddingBottom="32px"
              value={{ xs: 12, lg: 6 }}
            >
              <img
                style={{ display: 'block', margin: 'auto', maxWidth: '100%' }}
                src="/img/ai-illustration.svg"
                alt="Illustration of a girl with a notebook"
              />
            </Grid.Column>
            <Grid.Column
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems={{ xs: 'center', lg: 'flex-start' }}
              textAlign={{ xs: 'center', lg: 'initial' }}
              gap="24px"
              paddingTop="32px"
              paddingBottom="32px"
              value={{ xs: 12, lg: 6 }}
            >
              <Text variant="title2" color="primaryText">
                {t('s1_title')}
              </Text>
              <Text variant="paragraph1" color="primaryText">
                {t('s1_paragraph')}
              </Text>
            </Grid.Column>
          </Grid.Row>
        </Grid.Container>
      </Box>
      <Box backgroundColor={colors.secondaryBackground}>
        <Grid.Container>
          <Grid.Row padding={{ xs: '32px 0', lg: '64px 0' }}>
            <Grid.Column
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems={{ xs: 'center', lg: 'flex-start' }}
              textAlign={{ xs: 'center', lg: 'initial' }}
              gap="24px"
              paddingTop="32px"
              paddingBottom="32px"
              value={{ xs: 12, lg: 6 }}
            >
              <Text variant="title2" color="primaryText">
                {t('s2_title')}
              </Text>
              <Text variant="paragraph1" color="primaryText">
                {t('s2_paragraph')}
              </Text>
              <Text variant="paragraph1" color="primaryText">
                {t('s2_paragraph2')}
              </Text>
            </Grid.Column>
            <Grid.Column
              paddingTop="32px"
              paddingBottom="32px"
              value={{ xs: 12, lg: 6 }}
            >
              <img
                style={{ display: 'block', margin: 'auto', maxWidth: '100%' }}
                src="/img/notifications-illustration.svg"
                alt="Illustration of a girl with a notebook"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid.Container>
      </Box>
      <Box backgroundColor={colors.primaryBackground}>
        <Grid.Container>
          <Grid.Row
            flexWrap="wrap-reverse"
            padding={{ xs: '32px 0', lg: '64px 0' }}
          >
            <Grid.Column
              paddingTop="32px"
              paddingBottom="32px"
              value={{ xs: 12, lg: 6 }}
            >
              <img
                style={{ display: 'block', margin: 'auto', maxWidth: '100%' }}
                src="/img/environment-illustration.svg"
                alt="Illustration of a girl with a notebook"
              />
            </Grid.Column>
            <Grid.Column
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems={{ xs: 'center', lg: 'flex-start' }}
              textAlign={{ xs: 'center', lg: 'initial' }}
              gap="24px"
              paddingTop="32px"
              paddingBottom="32px"
              value={{ xs: 12, lg: 6 }}
            >
              <Text variant="title2" color="primaryText">
                {t('s3_title')}
              </Text>
              <Text variant="paragraph1" color="primaryText">
                {t('s3_paragraph')}
              </Text>
            </Grid.Column>
          </Grid.Row>
        </Grid.Container>
      </Box>
    </>
  );
}
