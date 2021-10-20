import { websitePageHOC } from '../../../src/components/wrappers/WebsitePage/hoc';

function EmployeeDashboardScreen() {
  return (
    <div style={{ display: 'flex', flex: 1, padding: 40 }}>
      <h1>Employee Dashboard</h1>
    </div>
  );
}

export default websitePageHOC(EmployeeDashboardScreen);