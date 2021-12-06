import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import { Box } from '../../../../../foundation/Box';
import { Text } from '../../../../../foundation/Text';
import { TextField } from '../../../../../foundation/TextField';
import { Button } from '../../../../../common/Button';

import { WebsitePageContext } from '../../../../../wrappers/WebsitePage/context';
import { authService } from '../../../../../../services/auth/authService';
import { api } from '../../../../../../infra/api';

export function DeleteManagerForm({ managerId, managers }) {
  const router = useRouter();

  const auth = authService(null);
  const token = auth.getToken();

  const { t } = useTranslation('company-managers');

  const { colors } = useContext(ThemeContext);
  const { toggleDeleteModal } = useContext(WebsitePageContext);

  const [hasEmployees, setHasEmployees] = useState(false);
  const [newManagerId, setNewManagerId] = useState();

  useEffect(async () => {
    try {
      const { data, status } = await api.post(
        'employee/manager-has-employees',
        {
          id: managerId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (status === 200) {
        setHasEmployees(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  }, [managerId]);

  async function handleDelete(event) {
    event.preventDefault();

    if (hasEmployees) {
      try {
        const { status } = await api.delete('manager', {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          data: {
            id: managerId,
            newIdManager: newManagerId,
          },
        });

        if (status === 200) {
          toggleDeleteModal();
          router.push(router.pathname);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const { status } = await api.delete('manager', {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          data: {
            id: managerId,
          },
        });

        if (status === 200) {
          toggleDeleteModal();
          router.push(router.pathname);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <form onSubmit={handleDelete}>
      <Box padding="24px">
        <Box display="flex" flexDirection="column" gap="32px">
          {hasEmployees ? (
            <>
              <Text variant="paragraph" color="primaryText">
                {t('delete_modal_message')}
              </Text>
              <TextField
                tag="select"
                type="text"
                name="newManagerId"
                value={newManagerId}
                onChange={(event) => setNewManagerId(event.target.value)}
              >
                <option value="0">{t('modal_select')}</option>
                {managers
                  .filter((manager) => manager.id !== managerId)
                  .map((manager) => (
                    <option key={manager.id} value={manager.id}>
                      {`${manager.firstName} ${manager.lastName}`}
                    </option>
                  ))}
              </TextField>
            </>
          ) : (
            <Box textAlign="center" padding="48px 0">
              <Text variant="paragraph" color="primaryText">
                {t('delete_modal_warn')}
              </Text>
            </Box>
          )}
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="flex-end"
        gap="18px"
        padding="24px 40px"
        borderTop={`1px solid ${colors.border}`}
      >
        <Button
          del
          disabled={
            (hasEmployees && !newManagerId) ||
            (hasEmployees && newManagerId === '0')
          }
        >
          {t('delete_btn')}
        </Button>
      </Box>
    </form>
  );
}
