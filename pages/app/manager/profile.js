import { websitePageHOC } from '../../../src/components/wrappers/WebsitePage/hoc';

function ManagerProfileScreen() {
  return (
    <div style={{ display: 'flex', flex: 1, padding: 40 }}>
      <h1>Manager Profile</h1>
    </div>
  );
}

export default websitePageHOC(ManagerProfileScreen);