import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useRouter } from 'next/router';

import { Box } from '../../../foundation/Box';
import { Text } from '../../../foundation/Text';
import { Button } from '../../../common/Button';

import { WebsitePageContext } from '../../../wrappers/WebsitePage/context';
import { api } from '../../../../infra/api';
import { authService } from '../../../../services/auth/authService';

export function DeleteConfirmation({ userInfo }) {
  const router = useRouter();

  const { colors, borderRadius } = useContext(ThemeContext);
  const { toggleDeleteModal } = useContext(WebsitePageContext);

  const auth = authService(null);
  const token = auth.getToken();

  console.log('managerId', userInfo.id, userInfo.userType);

  async function handleDelete() {
    const id = userInfo.id;

    try {
      const { status } = await api.delete('employee', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        data: {
          id: userInfo.id,
        },
      });

      // const { status } = await fetch('http://localhost:5000/v1/employee', {
      //   method: 'DELETE',
      //   body: JSON.stringify({
      //     id: userInfo.id,
      //   }),
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //     'Content-Type': 'application/json',
      //   },
      // });

      if (status === 200) {
        toggleDeleteModal();
        router.push(router.pathname);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Box padding="24px 40px">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          padding="48px 0"
        >
          <Text>Are you sure you want to delete this manager?</Text>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="flex-end"
        gap="18px"
        padding="24px 40px"
        borderTop={`1px solid ${colors.border}`}
      >
        <Button del onClick={handleDelete}>
          Deletar
        </Button>
      </Box>
    </>
  );
}
