import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import { Box } from '../../../../../foundation/Box';
import { Text } from '../../../../../foundation/Text';
import { Button } from '../../../../../common/Button';

import { WebsitePageContext } from '../../../../../wrappers/WebsitePage/context';
import { authService } from '../../../../../../services/auth/authService';
import { api } from '../../../../../../infra/api';

export function DeleteEmployeeForm({ employeeId }) {
  const router = useRouter();

  const auth = authService(null);
  const token = auth.getToken();

  const { t } = useTranslation('company-employees');

  const { colors } = useContext(ThemeContext);
  const { toggleDeleteModal } = useContext(WebsitePageContext);

  async function handleDelete(event) {
    event.preventDefault();

    try {
      const { status } = await api.delete('employee', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        data: {
          id: employeeId,
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

  return (
    <form onSubmit={handleDelete}>
      <Box padding="24px">
        <Box display="flex" flexDirection="column" gap="32px">
          <Box textAlign="center" padding="48px 0">
            <Text variant="paragraph" color="primaryText">
              {t('delete_modal_warn')}
            </Text>
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="flex-end"
        gap="18px"
        padding="24px 40px"
        borderTop={`1px solid ${colors.border}`}
      >
        <Button del>{t('delete_btn')}</Button>
      </Box>
    </form>
  );
}
