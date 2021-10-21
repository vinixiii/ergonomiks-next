import { websitePageHOC } from '../../../src/components/wrappers/WebsitePage/hoc';
import nookies from 'nookies';
import jwt from 'jsonwebtoken';

function ManagerDashboardScreen() {
  return (
    <div style={{ display: 'flex', flex: 1, padding: 40 }}>
      <h1>Manager Dashboard</h1>
    </div>
  );
}

export default websitePageHOC(ManagerDashboardScreen);

export async function getServerSideProps(context) {
  const token = await nookies.get(context).token;

  const decodedToken = jwt.decode(token);

  if (decodedToken?.role !== 'manager') {
    return {
      redirect: {
        destination: '/app/login',
        permanet: false,
      },
    };
  }

  return {
    props: {},
  };
}
