import { websitePageHOC } from '../src/components/wrappers/WebsitePage/hoc';

function Home() {
  return (
    <div style={{ display: 'flex', flex: 1, padding: 40 }}>
      <h1>Home</h1>
    </div>
  );
}

export default websitePageHOC(Home);
