import { websitePageHOC } from '../../../src/components/wrappers/WebsitePage/hoc';
import { ManagersScreen } from '../../../src/components/screens/app/company/ManagersScreen';
import { authService } from '../../../src/services/auth/authService';
import { api } from '../../../src/components/infra/api';

export default websitePageHOC(ManagersScreen);

export async function getServerSideProps(context) {
  const auth = authService(context);
  const session = await auth.getSession();

  const { data, status } = await api.post(
    'manager',
    { id: session.idCompany },
    { headers: { 'Content-Type': 'application/json' } }
  );

  if (status === 200) {
    return {
      props: {
        user: session,
        managers: data.data,
      },
    };
  }
}
