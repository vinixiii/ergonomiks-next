import { websitePageHOC } from '../../../src/components/wrappers/WebsitePage/hoc';
import nookies from 'nookies';
import jwt from 'jsonwebtoken';

function ManagerTeamScreen() {
  return (
    <div style={{ display: 'flex', flex: 1, padding: 40 }}>
      <h1>Manager Team</h1>
    </div>
  );
}

export default websitePageHOC(ManagerTeamScreen);

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
