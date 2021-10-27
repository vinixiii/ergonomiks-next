import { websitePageHOC } from '../../../src/components/wrappers/WebsitePage/hoc';
import { ManagersScreen } from '../../../src/components/screens/app/company/ManagersScreen';

export default websitePageHOC(ManagersScreen, {
  pageWrapperProps: {
    pageBoxProps: {
      flex: 1,
    },
  },
});
