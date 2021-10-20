import { websitePageHOC } from '../../src/components/wrappers/WebsitePage/hoc';

function Login() {
  return (
    <div style={{ display: 'flex', flex: 1, padding: 40 }}>
      <h1>Login</h1>
    </div>
  );
}

export default websitePageHOC(Login, {
  pageWrapperProps: {
    headerProps: { display: false },
    sidebarProps: { display: false },
  },
});
