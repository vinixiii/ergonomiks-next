import { websitePageHOC } from '../../../src/components/wrappers/WebsitePage/hoc';

function CompanyManagersScreen() {
  return (
    <div style={{ display: 'flex', flex: 1, padding: 40 }}>
      <h1>Company Managers</h1>
    </div>
  );
}

export default websitePageHOC(CompanyManagersScreen);