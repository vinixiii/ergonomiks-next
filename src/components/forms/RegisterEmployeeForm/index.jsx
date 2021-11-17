import React, { useContext, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { ThemeContext } from 'styled-components';
import { MdClose, MdOutlineAddAPhoto } from 'react-icons/md';
import { useTranslation } from 'next-i18next';

import { Box } from '../../foundation/Box';
import { Text } from '../../foundation/Text';
import { TextField } from '../../foundation/TextField';
import { Button } from '../../common/Button';
import { WebsitePageContext } from '../../wrappers/WebsitePage/context';
import { api } from '../../infra/api';
import { authService } from '../../../services/auth/authService';

export function RegisterEmployeeForm({ managers, session }) {
  const auth = authService();
  const token = auth.getToken();

  const router = useRouter();
  const { toggleRegisterManagerModal } = useContext(WebsitePageContext);
  const { colors, borderRadius } = useContext(ThemeContext);

  const fileInputRef = useRef();
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();

  const { t } = useTranslation('company-employees');

  const [managerInfo, setManagerInfo] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    idManager: '',
  });

  function handleChangeFieldValue(event) {
    const fieldName = event.target.getAttribute('name');

    setManagerInfo({
      ...managerInfo,
      [fieldName]: event.target.value,
    });
  }

  useEffect(() => {
    if (image) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setPreview(reader.result);
      };

      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  async function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData();

    if (image) {
      fd.append('image', image, image.name);
    }

    fd.append('firstName', managerInfo.firstName);
    fd.append('lastName', managerInfo.lastName);
    fd.append('phone', managerInfo.phone);
    fd.append('email', managerInfo.email);
    fd.append('password', managerInfo.password);
    fd.append('idCompany', session.idCompany);
    fd.append('idManager', managerInfo.idManager);

    const result = await api.post('employee', fd, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (result.status === 200) {
      toggleRegisterManagerModal();
      router.push(router.pathname);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Box padding="24px 40px">
        <Text
          tag="h3"
          variant="paragraph1"
          color="primaryText"
          marginBottom="16px"
        >
          {t('modal_section_title')}
        </Text>
        <Box
          display="flex"
          flexDirection="column"
          gap="18px"
          justifyContent="center"
          alignItems="center"
          border={`1px solid ${colors.border}`}
          borderRadius={borderRadius}
          marginBottom="16px"
        >
          <Box
            padding="48px"
            display="flex"
            flexDirection="column"
            gap="18px"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              width="147px"
              height="147px"
              position="relative"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap="18px"
              border={preview ? `` : `2px dashed ${colors.primary}`}
              borderRadius={borderRadius}
              textAlign="center"
              color={colors.secondaryText}
            >
              {preview ? (
                <>
                  <img
                    src={preview}
                    alt="Uploaded user image"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '6px',
                    }}
                  />
                  <MdClose
                    className="icon close-icon"
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                    }}
                    onClick={() => setImage(null)}
                  />
                </>
              ) : (
                <>
                  <MdOutlineAddAPhoto size="48" color={colors.primary} />
                  <Text variant="paragraph3">{t('img_not_chosen')}</Text>
                </>
              )}
            </Box>

            <Button
              width="100%"
              onClick={(event) => {
                event.preventDefault();
                fileInputRef.current.click();
              }}
            >
              {t('btn_choose_file')}
            </Button>
            <input
              type="file"
              accept="image/*"
              hidden
              ref={fileInputRef}
              onChange={(event) => {
                const file = event.target.files[0];

                if (file && file.type.substr(0, 5) === 'image') {
                  setImage(file);
                } else {
                  setImage(null);
                }
              }}
            />
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          gap="16px"
          flexWrap="wrap"
        >
          <Box
            display="flex"
            flex="1"
            flexDirection="column"
            gap="24px"
            minWidth="180px"
          >
            <Box
              display="flex"
              flex="1"
              flexDirection="column"
              gap="16px"
              minWidth="180px"
            >
              <Text tag="h3" variant="paragraph1" color="primaryText">
                {t('modal_section_title2')}
              </Text>
              <TextField
                type="text"
                placeholder={t('placeholder')}
                name="firstName"
                value={managerInfo.firstName}
                onChange={handleChangeFieldValue}
              />
              <TextField
                type="text"
                placeholder={t('placeholder2')}
                name="lastName"
                value={managerInfo.lastName}
                onChange={handleChangeFieldValue}
              />
              <TextField
                type="text"
                placeholder={t('placeholder3')}
                name="phone"
                value={managerInfo.phone}
                onChange={handleChangeFieldValue}
              />
            </Box>
            <Box
              display="flex"
              flex="1"
              flexDirection="column"
              gap="16px"
              minWidth="180px"
            >
              <Text tag="h3" variant="paragraph1" color="primaryText">
                {t('modal_section_title4')}
              </Text>
              <TextField
                tag="select"
                type="text"
                name="idManager"
                value={managerInfo.idManager}
                onChange={handleChangeFieldValue}
              >
                <option value="0">{t('placeholder6')}</option>
                {managers.map((manager) => (
                  <option key={manager.id} value={manager.id}>
                    {`${manager.firstName} ${manager.lastName}`}
                  </option>
                ))}
              </TextField>
            </Box>
          </Box>
          <Box
            display="flex"
            flex="1"
            flexDirection="column"
            gap="16px"
            minWidth="180px"
          >
            <Text tag="h3" variant="paragraph1" color="primaryText">
              {t('modal_section_title3')}
            </Text>
            <TextField
              type="text"
              placeholder={t('placeholder4')}
              name="email"
              value={managerInfo.email}
              onChange={handleChangeFieldValue}
            />
            <TextField
              type="password"
              placeholder={t('placeholder5')}
              name="password"
              value={managerInfo.password}
              onChange={handleChangeFieldValue}
            />
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="flex-end"
        padding="24px 40px"
        borderTop={`1px solid ${colors.border}`}
      >
        <Button>{t('btn_add')}</Button>
      </Box>
    </form>
  );
}
