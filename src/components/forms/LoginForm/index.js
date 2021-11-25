import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { setCookie } from 'nookies';
import * as yup from 'yup';
import jwt from 'jsonwebtoken';

import { TextField } from '../../foundation/TextField';
import { Button } from '../../common/Button';
import { Box } from '../../foundation/Box';
import { Text } from '../../foundation/Text';

import { api } from '../../../infra/api';

export function LoginForm() {
  const router = useRouter();

  const { t } = useTranslation('login');

  const schema = yup
    .object({
      email: yup.string().email(t('valid_email')).required(t('required_email')),
      password: yup.string().required(t('required_password')),
    })
    .required();

  const { register, handleSubmit, formState, setError, clearErrors } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(userData) {
    try {
      const { data, status } = await api.post(
        'account/signin',
        {
          email: userData.email,
          password: userData.password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (status === 200) {
        const decodedToken = jwt.decode(data.data.token);

        setCookie(null, 'LOGIN_APP_AUTH', data.data.token, {
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
    } catch (error) {
      console.log(error);

      setError('requestError', {
        type: 'manual',
        message: t('request_error'),
      });
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box display="flex" flexDirection="column" gap="16px">
        <TextField
          type="text"
          placeholder={t('email')}
          name="email"
          register={register}
          error={formState.errors.email}
          onClick={() => clearErrors('requestError')}
        />
        <TextField
          type="password"
          placeholder={t('password')}
          name="password"
          register={register}
          error={formState.errors.password}
          onClick={() => clearErrors('requestError')}
        />
        <Text variant="smallestException" color="red">
          {formState.errors.requestError?.message}
        </Text>
        <Button alignSelf="flex-end" marginTop="32px">
          {t('sign_in')}
        </Button>
      </Box>
    </form>
  );
}
