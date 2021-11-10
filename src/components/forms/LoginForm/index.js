import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { setCookie } from 'nookies';
import jwt from 'jsonwebtoken';

import { TextField } from '../../foundation/TextField';
import { Button } from '../../common/Button';
import { Box } from '../../foundation/Box';

export function LoginForm() {
  const router = useRouter();

  const { t } = useTranslation('login');

  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  function handleChangeFieldValue(event) {
    const fieldName = event.target.getAttribute('name');

    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    fetch('http://localhost:5000/v1/account/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: userInfo.email,
        password: userInfo.password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(async (res) => {
      const response = await res.json();
      console.log(response);

      if (response.success === true) {
        const decodedToken = jwt.decode(response.data.token);
        console.log(decodedToken);

        setCookie(null, 'LOGIN_APP_AUTH', response.data.token, {
          path: '/',
          maxAge: 86400 * 7,
        });

        if (decodedToken.role === 'admin') {
          router.push('/app/admin/companies');
        }
        if (decodedToken.role === 'company') {
          router.push('/app/company/managers');
        }
        if (decodedToken.role === 'manager') {
          router.push('/app/manager/dashboard');
        }
        if (decodedToken.role === 'employee') {
          router.push('/app/employee/dashboard');
        }
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" flexDirection="column" gap="16px">
        <TextField
          type="text"
          placeholder={t('email')}
          name="email"
          value={userInfo.email}
          onChange={handleChangeFieldValue}
        />
        <TextField
          type="password"
          placeholder={t('password')}
          name="password"
          value={userInfo.password}
          onChange={handleChangeFieldValue}
        />
        <Button alignSelf="flex-end" marginTop="32px">
          {t('sign_in')}
        </Button>
      </Box>
    </form>
  );
}
