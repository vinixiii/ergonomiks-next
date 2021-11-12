import { websitePageHOC } from '../../../src/components/wrappers/WebsitePage/hoc';
import { ManagersScreen } from '../../../src/components/screens/app/company/ManagersScreen';
import { authService } from '../../../src/services/auth/authService';
import { api } from '../../../src/components/infra/api';

export default websitePageHOC(ManagersScreen);

export async function getServerSideProps(context) {
  const auth = authService(context);
  const session = auth.getSession();
  const token = auth.getToken();

  const { data, status } = await api('manager/id/company', {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (status === 200) {
    return {
      props: {
        user: session,
        managers: data.data,
      },
    };
  }
}
