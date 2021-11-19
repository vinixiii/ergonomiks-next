import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { websitePageHOC } from '../../../src/components/wrappers/WebsitePage/hoc';
import { EmployeeDashboardScreen } from '../../../src/components/screens/app/employee/EmployeeDashboardScreen';

import { authService } from '../../../src/services/auth/authService';

export default websitePageHOC(EmployeeDashboardScreen);

export async function getServerSideProps(context) {
  const auth = authService(context);
  const session = auth.getSession();
  const token = auth.getToken();

  return {
    props: {
      user: session,
      ...(await serverSideTranslations(context.locale, [
        'preferences',
        'header',
      ])),
    },
  };
}
