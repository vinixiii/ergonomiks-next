import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { websitePageHOC } from '../../../src/components/wrappers/WebsitePage/hoc';
import { EmployeeDashboardScreen } from '../../../src/components/screens/app/employee/EmployeeDashboardScreen';

import { authService } from '../../../src/services/auth/authService';
import { api } from '../../../src/infra/api';

export default websitePageHOC(EmployeeDashboardScreen);

export async function getServerSideProps(context) {
  const auth = authService(context);
  const session = auth.getSession();
  const token = auth.getToken();

  const { data } = await api('employee/id/user', {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  }).catch((error) => console.log(error));

  return {
    props: {
      session,
      userInfo: data.data,
      ...(await serverSideTranslations(context.locale, [
        'employee-dashboard',
        'header',
      ])),
    },
  };
}
