import { websitePageHOC } from '../../../src/components/wrappers/WebsitePage/hoc';

function ManagerDashboardScreen() {
  return (
    <div style={{ display: 'flex', flex: 1, padding: 40 }}>
      <h1>Manager Dashboard</h1>
    </div>
  );
}

export default websitePageHOC(ManagerDashboardScreen);
