import React, { useContext } from 'react';
import { MdSearch } from 'react-icons/md';

import { WebsitePageContext } from '../../../../wrappers/WebsitePage/context';
import { Box } from '../../../../foundation/Box';
import { TextField } from '../../../../foundation/TextField';
import { Button } from '../../../../common/Button';
import { Table } from '../../../../common/Table';

import { managers } from '../../../../../../mock/managers';

export function ManagersScreen() {
  const { toggleRegisterManagerModal } = useContext(WebsitePageContext);

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gap="18px"
        flexWrap="wrap"
        // backgroundColor={colors.primaryBackground}
        padding="40px"
        // borderBottom={`1px solid ${colors.border}`}
      >
        <TextField placeholder="Search a manager" icon={<MdSearch />} />
        <Button onClick={toggleRegisterManagerModal}>+ Add manager</Button>
      </Box>

      <Table
        title="Managers"
        columns={['Name', 'Email', 'Phone']}
        rows={managers}
      />
    </>
  );
}
