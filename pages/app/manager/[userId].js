import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { websitePageHOC } from '../../../src/components/wrappers/WebsitePage/hoc';
import { TeamMemberScreen } from '../../../src/components/screens/app/manager/TeamMemberScreen';

export default websitePageHOC(TeamMemberScreen);

export async function getServerSideProps(context) {
  return {
    props: {
      ...(await serverSideTranslations(context.locale, ['header'])),
    },
  };
}
