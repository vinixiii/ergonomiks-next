import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { websitePageHOC } from '../../../src/components/wrappers/WebsitePage/hoc';
import { ManagerTeamScreen } from '../../../src/components/screens/app/manager/ManagerTeamScreen';

import { authService } from '../../../src/services/auth/authService';
import { api } from '../../../src/infra/api';

export default websitePageHOC(ManagerTeamScreen);

export async function getServerSideProps(context) {
  const auth = authService(context);
  const session = auth.getSession();
  const token = auth.getToken();

  const employeesListResponse = await api('employee/id/manager', {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (employeesListResponse.status === 200) {
    return {
      props: {
        user: session,
        employees: employeesListResponse.data.data,
        ...(await serverSideTranslations(context.locale, [
          'manager-team',
          'header',
        ])),
      },
    };
  }
}
