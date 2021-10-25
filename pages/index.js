import React from 'react';
import { useRouter } from 'next/router';
import { Link } from '../src/components/common/Link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import { websitePageHOC } from '../src/components/wrappers/WebsitePage/hoc';

function Home() {
  const router = useRouter();
  const { t } = useTranslation('common');
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: 40 }}
    >
      <h1>{t('title')}</h1>
      <Link href="/" locale={router.locale === 'en-US' ? 'pt-BR' : 'en-US'}>
        <button>{t('button')}</button>
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
