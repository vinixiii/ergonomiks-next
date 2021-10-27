import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { MdSearch } from 'react-icons/md';

import { Box } from '../../../../foundation/Box';
import { TextField } from '../../../../foundation/TextField';
import { Button } from '../../../../common/Button';
import { Table } from '../../../../common/Table';

export function ManagersScreen() {
  const { colors, borderRadius } = useContext(ThemeContext);

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gap="18px"
        flexWrap="wrap"
        backgroundColor={colors.primaryBackground}
        padding="40px"
        borderBottom={`1px solid ${colors.border}`}
      >
        <TextField placeholder="Search a manager" icon={<MdSearch />} />
        <Button>+ Add manager</Button>
      </Box>

      <Box flex="1" padding="40px">
        <Table title="Managers">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Paulo Brandão</td>
                <td>paulo@ergonomiks.com</td>
                <td>+55 (11) 99123-4567</td>
                <td>/ X</td>
              </tr>
              <tr>
                <td>Paulo Brandão</td>
                <td>paulo@ergonomiks.com</td>
                <td>+55 (11) 99123-4567</td>
                <td>/ X</td>
              </tr>
              <tr>
                <td>Paulo Brandão</td>
                <td>paulo@ergonomiks.com</td>
                <td>+55 (11) 99123-4567</td>
                <td>/ X</td>
              </tr>
              <tr>
                <td>Paulo Brandão</td>
                <td>paulo@ergonomiks.com</td>
                <td>+55 (11) 99123-4567</td>
                <td>/ X</td>
              </tr>
              <tr>
                <td>Paulo Brandão</td>
                <td>paulo@ergonomiks.com</td>
                <td>+55 (11) 99123-4567</td>
                <td>/ X</td>
              </tr>
              <tr>
                <td>Paulo Brandão</td>
                <td>paulo@ergonomiks.com</td>
                <td>+55 (11) 99123-4567</td>
                <td>/ X</td>
              </tr>
              <tr>
                <td>Paulo Brandão</td>
                <td>paulo@ergonomiks.com</td>
                <td>+55 (11) 99123-4567</td>
                <td>/ X</td>
              </tr>
              <tr>
                <td>Paulo Brandão</td>
                <td>paulo@ergonomiks.com</td>
                <td>+55 (11) 99123-4567</td>
                <td>/ X</td>
              </tr>
              <tr>
                <td>Paulo Brandão</td>
                <td>paulo@ergonomiks.com</td>
                <td>+55 (11) 99123-4567</td>
                <td>/ X</td>
              </tr>
              <tr>
                <td>Paulo Brandão</td>
                <td>paulo@ergonomiks.com</td>
                <td>+55 (11) 99123-4567</td>
                <td>/ X</td>
              </tr>
              <tr>
                <td>Paulo Brandão</td>
                <td>paulo@ergonomiks.com</td>
                <td>+55 (11) 99123-4567</td>
                <td>/ X</td>
              </tr>
            </tbody>
          </table>
        </Table>
      </Box>
    </>
  );
}
