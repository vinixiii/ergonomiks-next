import { websitePageHOC } from '../../../src/components/wrappers/WebsitePage/hoc';

import { authService } from '../../../src/services/auth/authService';
import { api } from '../../../src/components/infra/api';
import { EmployeesScreen } from '../../../src/components/screens/app/company/EmployeesScreen';

function CompanyEmployeesScreen() {
  return (
    <div style={{ display: 'flex', flex: 1, padding: 40 }}>
      <h1>Company Employees</h1>
    </div>
  );
}

export default websitePageHOC(EmployeesScreen);

export async function getServerSideProps(context) {
  const auth = authService(context);
  const session = auth.getSession();
  const token = auth.getToken();

  const employeesListResponse = await api('employee/id/company', {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  const managersListResponse = await api('manager/id/company', {
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
        managers: managersListResponse.data.data,
      },
    };
  }
}
