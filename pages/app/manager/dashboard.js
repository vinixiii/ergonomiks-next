import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { websitePageHOC } from '../../../src/components/wrappers/WebsitePage/hoc';
import { ManagerDashboardScreen } from '../../../src/components/screens/app/manager/ManagerDashboardScreen';

export default websitePageHOC(ManagerDashboardScreen);

export async function getServerSideProps(context) {
  return {
    props: {
      ...(await serverSideTranslations(context.locale, ['header'])),
    },
  };
}
