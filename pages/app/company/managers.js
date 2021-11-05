import { websitePageHOC } from '../../../src/components/wrappers/WebsitePage/hoc';
import { ManagersScreen } from '../../../src/components/screens/app/company/ManagersScreen';
import { authService } from '../../../src/services/auth/authService';
import { api } from '../../../src/components/infra/api';

export default websitePageHOC(ManagersScreen, {
  pageWrapperProps: {
    pageBoxProps: {
      flex: 1,
    },
  },
});

export async function getServerSideProps(context) {
  const auth = authService(context);
  const session = await auth.getSession();

  console.log(session);

  const { data, status } = await api.post(
    'manager',
    { id: session.idCompany },
    { headers: { 'Content-Type': 'application/json' } }
  );

  console.log('Fui chamado');

  if (status === 200) {
    return {
      props: {
        user: session,
        managers: data.data,
      },
    };
  }
}
