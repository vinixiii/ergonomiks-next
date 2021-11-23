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
import { Modal } from '../../../common/Modal';
import { WebsitePageContext } from '../../../wrappers/WebsitePage/context';
import { ChangePasswordForm } from '../../../forms/preferences/ChangePasswordForm';
import { GlobalThemeContext } from '../../../../infra/contexts/ThemeContext';

export function PreferencesScreen({ account, user }) {
  const router = useRouter();
  const { locale } = router;

  const { isModalOpen, toggleModal } = useContext(WebsitePageContext);
  const { title, colors, borderRadius } = useContext(ThemeContext);
  const { setTheme } = useContext(GlobalThemeContext);

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
    <>
      <Modal title="Change password" isOpen={isModalOpen} onClose={toggleModal}>
        <ChangePasswordForm />
      </Modal>

      <Grid.Container marginTop="40px">
        <Grid.Row justifyContent="center">
          <Grid.Column value={{ xs: 12, md: 6 }}>
            <PreferencesScreenWrapper>
              <Box>
                <Box
                  padding="0 40px"
                  backgroundColor={colors.secondaryBackground}
                  borderRadius={borderRadius}
                  borderBottom={`1px solid ${colors.border}`}
                >
                  <Text
                    lineHeight="80px"
                    variant="subtitle"
                    color="primaryText"
                  >
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
                  {user.role === 'company' && <CompanyInfo account={account} />}
                  {user.role === 'manager' && (
                    <ContributorInfo account={account} />
                  )}
                  {user.role === 'employee' && (
                    <ContributorInfo account={account} />
                  )}
                  <Box display="flex" flexDirection="column" gap="16px">
                    <Text variant="paragraph2" color="primaryText">
                      {t('common_label')}
                    </Text>
                    <TextField value={account.user?.email} readOnly />
                  </Box>
                  <Box display="flex" flexDirection="column" gap="16px">
                    <Text variant="paragraph2" color="primaryText">
                      {t('common_label2')}
                    </Text>
                    <TextField
                      value="**********"
                      action={t('change_pwd')}
                      onActionClick={toggleModal}
                      readOnly
                    />
                  </Box>
                </Box>
              </Box>
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
                  <Text
                    lineHeight="80px"
                    variant="subtitle"
                    color="primaryText"
                  >
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
                  <Text
                    lineHeight="80px"
                    variant="subtitle"
                    color="primaryText"
                  >
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
                    onClick={() => setTheme('light')}
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
                    onClick={() => setTheme('dark')}
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
    </>
  );
}

function CompanyInfo({ account }) {
  const { t } = useTranslation('preferences');

  return (
    <>
      <Box display="flex" flexDirection="column" gap="16px">
        <Text variant="paragraph2" color="primaryText">
          {t('company_label')}
        </Text>
        <TextField value={account.corporateName} readOnly />
      </Box>
      <Box display="flex" flexDirection="column" gap="16px">
        <Text variant="paragraph2" color="primaryText">
          CNPJ
        </Text>
        <TextField value={account.cnpj} readOnly />
      </Box>
      <Box display="flex" flexDirection="column" gap="16px">
        <Text variant="paragraph2" color="primaryText">
          CEP
        </Text>
        <TextField value={account.cep} readOnly />
      </Box>
    </>
  );
}

function ContributorInfo({ account }) {
  const { t } = useTranslation('preferences');

  return (
    <>
      <Box display="flex" flexDirection="column" gap="16px">
        <Text variant="paragraph2" color="primaryText">
          {t('person_label')}
        </Text>
        <TextField value={account.firstName} readOnly />
      </Box>
      <Box display="flex" flexDirection="column" gap="16px">
        <Text variant="paragraph2" color="primaryText">
          {t('person_label2')}
        </Text>
        <TextField value={account.lastName} readOnly />
      </Box>
      <Box display="flex" flexDirection="column" gap="16px">
        <Text variant="paragraph2" color="primaryText">
          {t('person_label3')}
        </Text>
        <TextField value={account.phone} readOnly />
      </Box>
    </>
  );
}
