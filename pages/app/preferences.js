import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { websitePageHOC } from '../../src/components/wrappers/WebsitePage/hoc';
import { PreferencesScreen } from '../../src/components/screens/app/PreferencesScreen';

export default websitePageHOC(PreferencesScreen);

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['preferences', 'header'])),
  },
});
