import { websitePageHOC } from '../../../src/components/wrappers/WebsitePage/hoc';

function CompanyEmployeesScreen() {
  return (
    <div style={{ display: 'flex', flex: 1, padding: 40 }}>
      <h1>Company Employees</h1>
    </div>
  );
}

export default websitePageHOC(CompanyEmployeesScreen);