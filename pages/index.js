import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { setCookie } from 'nookies';

import { websitePageHOC } from '../src/components/wrappers/WebsitePage/hoc';
import { HomeScreen } from '../src/components/screens/HomeScreen';

function Home() {
  const router = useRouter();
  const { locale } = router;

  const { t } = useTranslation('common');

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  useEffect(() => {
    setCookie(null, 'NEXT_LOCALE', locale, {
      path: '/',
      maxAge: 86400 * 7,
    });
  }, [locale]);
}

export default websitePageHOC(HomeScreen, {
  pageWrapperProps: {
    footerProps: { display: true },
  },
});

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
