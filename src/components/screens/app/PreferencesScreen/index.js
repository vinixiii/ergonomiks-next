import React, { useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import { useTranslation } from 'next-i18next';

import { Grid } from '../../../foundation/Grid';
import { Box } from '../../../foundation/Box';
import { Text } from '../../../foundation/Text';
import { TextField } from '../../../foundation/TextField';
import { useRouter } from 'next/router';
import { setCookie } from 'nookies';
import { PreferencesScreenWrapper } from './styles/PreferencesScreenWrapper';

function CompanyInfo() {
  const { colors, borderRadius } = useContext(ThemeContext);
  const { t } = useTranslation('preferences');

  return (
    <Box>
      <Box
        padding="0 40px"
        backgroundColor={colors.secondaryBackground}
        borderRadius={borderRadius}
        borderBottom={`1px solid ${colors.border}`}
      >
        <Text lineHeight="80px" variant="subtitle" color="primaryText">
          {t('account')}
        </Text>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        gap="16px"
        padding="22px 40px 40px"
        backgroundColor={colors.primaryBackground}
      >
        <Box display="flex" flexDirection="column" gap="16px">
          <Text variant="paragraph2" color="primaryText">
            {t('company_label')}
          </Text>
          <TextField value="4PEOPLE" readOnly />
        </Box>
        <Box display="flex" flexDirection="column" gap="16px">
          <Text variant="paragraph2" color="primaryText">
            CNPJ
          </Text>
          <TextField value="71.568.916/0001-90" readOnly />
        </Box>
        <Box display="flex" flexDirection="column" gap="16px">
          <Text variant="paragraph2" color="primaryText">
            CEP
          </Text>
          <TextField value="59012-256" readOnly />
        </Box>
        <Box display="flex" flexDirection="column" gap="16px">
          <Text variant="paragraph2" color="primaryText">
            {t('common_label')}
          </Text>
          <TextField value="rh@4people.com" readOnly />
        </Box>
        <Box display="flex" flexDirection="column" gap="16px">
          <Text variant="paragraph2" color="primaryText">
            {t('common_label2')}
          </Text>
          <TextField value="**********" action={t('change_pwd')} readOnly />
        </Box>
      </Box>
    </Box>
  );
}

export function PreferencesScreen() {
  const router = useRouter();
  const { locale } = router;
  const { title, colors, borderRadius } = useContext(ThemeContext);
  const { t } = useTranslation('preferences');

  const changeLanguage = (e) => {
    const locale = e.target.getAttribute('name');
    if (locale !== router.locale) {
      router.push(router.pathname, router.asPath, { locale });
    }
  };

  useEffect(() => {
    setCookie(null, 'NEXT_LOCALE', locale, {
      path: '/',
      maxAge: 86400 * 7,
    });
  }, [locale]);

  return (
    <Grid.Container marginTop="40px">
      <Grid.Row justifyContent="center">
        <Grid.Column value={{ xs: 12, md: 6 }}>
          <PreferencesScreenWrapper>
            <CompanyInfo />
          </PreferencesScreenWrapper>
        </Grid.Column>

        <Grid.Column value={{ xs: 12, md: 6 }}>
          <PreferencesScreenWrapper>
            <Box>
              <Box
                padding="0 40px"
                backgroundColor={colors.secondaryBackground}
                borderRadius={borderRadius}
                borderBottom={`1px solid ${colors.border}`}
              >
                <Text lineHeight="80px" variant="subtitle" color="primaryText">
                  {t('language')}
                </Text>
              </Box>

              <Box
                display="flex"
                flexDirection="column"
                gap="16px"
                padding="22px 40px 40px"
                backgroundColor={colors.primaryBackground}
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  padding="0 12px"
                  backgroundColor={
                    locale === 'en-US' && colors.tertiaryBackground
                  }
                  className={`language-option ${
                    locale === 'en-US' && 'active'
                  }`}
                >
                  <Text
                    lineHeight="36px"
                    variant="paragraph2"
                    name="en-US"
                    onClick={changeLanguage}
                    color={locale === 'en-US' ? 'primaryText' : undefined}
                  >
                    {t('en_us')}
                  </Text>
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  padding="0 12px"
                  backgroundColor={
                    locale === 'pt-BR' && colors.tertiaryBackground
                  }
                  className={`language-option ${
                    locale === 'pt-BR' && 'active'
                  }`}
                >
                  <Text
                    lineHeight="36px"
                    variant="paragraph2"
                    name="pt-BR"
                    onClick={changeLanguage}
                    color={locale === 'pt-BR' ? 'primaryText' : undefined}
                  >
                    {t('pt_br')}
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
                <Text lineHeight="80px" variant="subtitle" color="primaryText">
                  {t('theme')}
                </Text>
              </Box>

              <Box
                display="flex"
                flexDirection="column"
                gap="16px"
                padding="22px 40px 40px"
                backgroundColor={colors.primaryBackground}
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  padding="0 12px"
                  backgroundColor={
                    title === 'lightMode' && colors.tertiaryBackground
                  }
                  className={`language-option ${
                    title === 'lightMode' && 'active'
                  }`}
                >
                  <Text
                    lineHeight="36px"
                    variant="paragraph2"
                    color={title === 'lightMode' ? 'primaryText' : undefined}
                  >
                    {t('light')}
                  </Text>
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  padding="0 12px"
                  backgroundColor={
                    title === 'darkMode' && colors.tertiaryBackground
                  }
                  className={`language-option ${
                    title === 'darkMode' && 'active'
                  }`}
                >
                  <Text
                    lineHeight="36px"
                    variant="paragraph2"
                    color={title === 'darkMode' ? 'primaryText' : undefined}
                  >
                    {t('dark')}
                  </Text>
                </Box>
              </Box>
            </Box>
          </PreferencesScreenWrapper>
        </Grid.Column>
      </Grid.Row>
    </Grid.Container>
  );
}
