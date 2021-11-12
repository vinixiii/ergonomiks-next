import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { websitePageHOC } from '../../src/components/wrappers/WebsitePage/hoc';
import { LoginScreen } from '../../src/components/screens/app/LoginScreen';

export default websitePageHOC(LoginScreen, {
  pageWrapperProps: {
    headerProps: { display: false },
    pageBoxProps: {
      flex: 1,
      backgroundImage: {
        xs: '',
        xl: 'url(/img/background-illustration.svg)',
      },
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom left',
    },
  },
});

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['login'])),
  },
});
