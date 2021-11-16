import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { websitePageHOC } from '../src/components/wrappers/WebsitePage/hoc';
import { ContactScreen } from '../src/components/screens/ContactScreen';

export default websitePageHOC(ContactScreen, {
  pageWrapperProps: {
    footerProps: { display: true },
  },
});

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['header'])),
  },
});
