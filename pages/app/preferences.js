import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { websitePageHOC } from '../../src/components/wrappers/WebsitePage/hoc';
import { PreferencesScreen } from '../../src/components/screens/app/PreferencesScreen';

import { authService } from '../../src/services/auth/authService';
import { api } from '../../src/infra/api';

export default websitePageHOC(PreferencesScreen);

export async function getServerSideProps(context) {
  const auth = authService(context);
  const session = auth.getSession();
  const token = auth.getToken();

  let response = {
    error: 'Failed to fetch data',
  };

  if (session.role === 'company') {
    const { data } = await api('company/id/user', {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }).catch((error) => console.log(error));

    response = data.data;
  }

  if (session.role === 'manager') {
    const { data } = await api('manager/id/user', {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }).catch((error) => console.log(error));

    response = data.data;
  }

  if (session.role === 'employee') {
    const { data } = await api('employee/id/user', {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }).catch((error) => console.log(error));

    response = data.data;
  }

  return {
    props: {
      account: response,
      user: session,
      ...(await serverSideTranslations(context.locale, [
        'preferences',
        'header',
      ])),
    },
  };
}
