import { websitePageHOC } from '../../../src/components/wrappers/WebsitePage/hoc';

function AdminCompaniesScreen() {
  return (
    <div style={{ display: 'flex', flex: 1, padding: 40 }}>
      <h1>Admin Companies</h1>
    </div>
  );
}

export default websitePageHOC(AdminCompaniesScreen);