import React, { useEffect, useState, useContext } from 'react';
import { MdSearch, MdEdit, MdClose } from 'react-icons/md';
import { ThemeContext } from 'styled-components';
import { useTranslation } from 'next-i18next';

import { WebsitePageContext } from '../../../../wrappers/WebsitePage/context';
import { Box } from '../../../../foundation/Box';
import { Text } from '../../../../foundation/Text';
import { TextField } from '../../../../foundation/TextField';
import { Button } from '../../../../common/Button';
import { Table } from '../../../../common/Table';
import { Modal } from '../../../../common/Modal';
import { RegisterEmployeeForm } from '../../../../forms/RegisterEmployeeForm';

export function EmployeesScreen({ employees, managers, user }) {
  const { isModalOpen, toggleModal } =
    useContext(WebsitePageContext);
  const { borderRadius } = useContext(ThemeContext);

  const { t } = useTranslation('company-employees');

  return (
    <>
      <Modal
        title={t('modal_title')}
        isOpen={isModalOpen}
        onClose={toggleModal}
      >
        <RegisterEmployeeForm managers={managers} session={user} />
      </Modal>

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
            <Button onClick={toggleModal}>
              {t('btn_add_employee')}
            </Button>
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
              {employees.map((manager) => (
                <tr key={manager.id}>
                  <td>
                    <Box display="flex" alignItems="center" gap="12px">
                      <Box width="36px" height="36px">
                        <img
                          src={`http://localhost:5000/resources/images/${manager.image}`}
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
                        {`${manager.firstName} ${manager.lastName}`}
                      </Text>
                    </Box>
                  </td>
                  <td>
                    <Text variant="paragraph3" color="primaryText">
                      {manager.user.email}
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
