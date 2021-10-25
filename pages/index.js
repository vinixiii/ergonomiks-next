import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { setCookie } from 'nookies';

import { websitePageHOC } from '../src/components/wrappers/WebsitePage/hoc';
import { Link } from '../src/components/common/Link';

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

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        padding: 40,
        gap: 24,
      }}
    >
      <h1>{t('banner_title')}</h1>

      <select
        onChange={changeLanguage}
        defaultValue={locale}
        style={{ width: '200px' }}
      >
        <option value="en-US">English (US)</option>
        <option value="pt-BR">Português (BR)</option>
      </select>

      <Link href="/app/login" locale={locale} style={{ width: '200px' }}>
        <button style={{ width: '200px' }}>{t('btn_sign_in')}</button>
      </Link>
    </div>
  );
}

export default websitePageHOC(Home, {
  pageWrapperProps: {
    headerProps: { display: false },
    sidebarProps: { display: false },
  },
});

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
