import React, { useContext } from 'react';
import { MdSearch, MdEdit, MdClose } from 'react-icons/md';
import { ThemeContext } from 'styled-components';

import { WebsitePageContext } from '../../../../wrappers/WebsitePage/context';
import { Box } from '../../../../foundation/Box';
import { Text } from '../../../../foundation/Text';
import { TextField } from '../../../../foundation/TextField';
import { Button } from '../../../../common/Button';
import { Table } from '../../../../common/Table';

import { managers } from '../../../../../../mock/managers';

export function ManagersScreen() {
  const { toggleRegisterManagerModal } = useContext(WebsitePageContext);
  const { borderRadius } = useContext(ThemeContext);

  return (
    <>
      <Box display="flex" flex="1" justifyContent="center">
        <Box display="flex" flex="1" flexDirection="column" maxWidth="1366px">
          <Box
            display="flex"
            flexDirection={{ xs: 'column', md: 'row' }}
            justifyContent="space-between"
            alignItems={{ md: 'center' }}
            gap="18px"
            flexWrap="wrap"
            padding="40px 16px"
          >
            <TextField placeholder="Search a manager" icon={<MdSearch />} />
            <Button onClick={toggleRegisterManagerModal}>Add manager</Button>
          </Box>
          <Table title="Managers">
            <thead>
              <tr>
                <th>
                  <Text variant="paragraph1" color="primaryText">
                    Name
                  </Text>
                </th>
                <th>
                  <Text variant="paragraph1" color="primaryText">
                    Email
                  </Text>
                </th>
                <th>
                  <Text variant="paragraph1" color="primaryText">
                    Phone
                  </Text>
                </th>
                <th>
                  <Text variant="paragraph1" color="primaryText">
                    Actions
                  </Text>
                </th>
              </tr>
            </thead>
            <tbody>
              {managers.map((manager) => (
                <tr key={manager.name}>
                  <td>
                    <Box display="flex" alignItems="center" gap="12px">
                      <Box width="36px" height="36px">
                        <img
                          src="https://github.com/vinixiii.png"
                          alt="eu"
                          style={{
                            width: '100%',
                            borderRadius: borderRadius,
                            objectFit: 'cover',
                          }}
                        />
                      </Box>
                      <Text variant="paragraph3" color="primaryText">
                        {manager.name}
                      </Text>
                    </Box>
                  </td>
                  <td>
                    <Text variant="paragraph3" color="primaryText">
                      {manager.email}
                    </Text>
                  </td>
                  <td>
                    <Text variant="paragraph3" color="primaryText">
                      {manager.phone}
                    </Text>
                  </td>
                  <td>
                    <div id="icons">
                      <MdEdit className="icon edit-icon" />
                      <MdClose className="icon close-icon" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Box>
      </Box>
    </>
  );
}
