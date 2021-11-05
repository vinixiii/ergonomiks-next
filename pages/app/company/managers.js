import { useState } from 'react';
import { websitePageHOC } from '../../../src/components/wrappers/WebsitePage/hoc';
import { ManagersScreen } from '../../../src/components/screens/app/company/ManagersScreen';
import { api } from '../../../src/components/infra/api';

export default websitePageHOC(ManagersScreen, {
  pageWrapperProps: {
    pageBoxProps: {
      flex: 1,
    },
  },
});

export async function getServerSideProps(context) {
  const { data, status } = await api.post(
    'manager',
    { id: 'aa67cbd8-85c0-46a3-ae98-01b698589417' },
    { headers: { 'Content-Type': 'application/json' } }
  );

  console.log('Fui chamado');

  if (status === 200) {
    return {
      props: {
        managers: data.data,
      },
    };
  }
}
