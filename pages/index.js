import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { websitePageHOC } from '../src/components/wrappers/WebsitePage/hoc';
import { HomeScreen } from '../src/components/screens/HomeScreen';

export default websitePageHOC(HomeScreen, {
  pageWrapperProps: {
    footerProps: { display: true },
  },
});

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'header'])),
  },
});
