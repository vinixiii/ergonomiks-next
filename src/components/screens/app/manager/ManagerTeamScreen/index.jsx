import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useTranslation } from 'next-i18next';

import { MdSearch, MdOutlineVisibility } from 'react-icons/md';

import { Box } from '../../../../foundation/Box';
import { Text } from '../../../../foundation/Text';
import { TextField } from '../../../../foundation/TextField';
import { Table } from '../../../../common/Table';
import router from 'next/router';

export function ManagerTeamScreen({ employees }) {
  const { borderRadius } = useContext(ThemeContext);

  const { t } = useTranslation('manager-team');

  return (
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
          <TextField placeholder={t('search_input')} icon={<MdSearch />} />
        </Box>
        <Table title={t('table_title')}>
          <thead>
            <tr>
              <th>
                <Text variant="paragraph1" color="primaryText">
                  {t('thead')}
                </Text>
              </th>
              <th>
                <Text variant="paragraph1" color="primaryText">
                  {t('thead2')}
                </Text>
              </th>
              <th>
                <Text variant="paragraph1" color="primaryText">
                  {t('thead3')}
                </Text>
              </th>
              <th>
                <Text variant="paragraph1" color="primaryText">
                  {t('actions')}
                </Text>
              </th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>
                  <Box display="flex" alignItems="center" gap="12px">
                    <Box width="36px" height="36px">
                      <img
                        src={`http://localhost:5000/resources/images/${employee.image}`}
                        alt="eu"
                        style={{
                          width: '100%',
                          height: '100%',
                          borderRadius: borderRadius,
                          objectFit: 'cover',
                        }}
                      />
                    </Box>
                    <Text variant="paragraph3" color="primaryText">
                      {`${employee.firstName} ${employee.lastName}`}
                    </Text>
                  </Box>
                </td>
                <td>
                  <Text variant="paragraph3" color="primaryText">
                    {employee.user.email}
                  </Text>
                </td>
                <td>
                  <Text variant="paragraph3" color="primaryText">
                    {employee.phone}
                  </Text>
                </td>
                <td>
                  <div id="icons">
                    <MdOutlineVisibility
                      className="icon edit-icon"
                      onClick={() =>
                        router.push(`/app/manager/${employee.idUser}`)
                      }
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Box>
    </Box>
  );
}
