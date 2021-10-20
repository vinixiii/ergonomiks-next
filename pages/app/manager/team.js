import { websitePageHOC } from '../../../src/components/wrappers/WebsitePage/hoc';

function ManagerTeamScreen() {
  return (
    <div style={{ display: 'flex', flex: 1, padding: 40 }}>
      <h1>Manager Team</h1>
    </div>
  );
}

export default websitePageHOC(ManagerTeamScreen);