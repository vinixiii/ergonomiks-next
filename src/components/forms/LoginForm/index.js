import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { setCookie } from 'nookies';
import jwt from 'jsonwebtoken';
import * as yup from 'yup';

import { TextField } from '../../foundation/TextField';
import { Button } from '../../common/Button';
import { Box } from '../../foundation/Box';

const schema = yup
  .object({
    email: yup.string().email('must be a valid email').required('cu'),
    password: yup.string().required('pinto'),
  })
  .required();

export function LoginForm() {
  const router = useRouter();

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(formState);

  const { t } = useTranslation('login');

  // const [userInfo, setUserInfo] = useState({
  //   email: '',
  //   password: '',
  // });

  // function handleChangeFieldValue(event) {
  //   const fieldName = event.target.getAttribute('name');

  //   setUserInfo({
  //     ...userInfo,
  //     [fieldName]: event.target.value,
  //   });
  // }

  function onSubmit(userData) {
    fetch('http://localhost:5000/v1/account/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: userData.email,
        password: userData.password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(async (res) => {
      const response = await res.json();

      if (response.success === true) {
        const decodedToken = jwt.decode(response.data.token);

        setCookie(null, 'LOGIN_APP_AUTH', response.data.token, {
          path: '/',
          maxAge: 86400 * 7,
        });

        if (decodedToken.role === 'admin') {
          router.push('/app/admin/companies', '/app/admin/companies', {
            locale: router.locale,
          });
        }
        if (decodedToken.role === 'company') {
          router.push('/app/company/managers', '/app/company/managers', {
            locale: router.locale,
          });
        }
        if (decodedToken.role === 'manager') {
          router.push('/app/manager/dashboard', '/app/manager/dashboard', {
            locale: router.locale,
          });
        }
        if (decodedToken.role === 'employee') {
          router.push('/app/employee/dashboard', '/app/employee/dashboard', {
            locale: router.locale,
          });
        }
      }
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box display="flex" flexDirection="column" gap="16px">
        <TextField
          type="text"
          placeholder={t('email')}
          name="email"
          // value={userInfo.email}
          // onChange={handleChangeFieldValue}
          register={register}
        />
        <p>{formState.errors.email?.message}</p>
        <TextField
          type="password"
          placeholder={t('password')}
          name="password"
          // value={userInfo.password}
          // onChange={handleChangeFieldValue}
          register={register}
        />
        <p>{formState.errors.password?.message}</p>
        <Button alignSelf="flex-end" marginTop="32px">
          {t('sign_in')}
        </Button>
      </Box>
    </form>
  );
}
