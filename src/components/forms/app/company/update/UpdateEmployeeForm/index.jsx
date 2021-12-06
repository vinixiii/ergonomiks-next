import React, { useContext, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { ThemeContext } from 'styled-components';
import { MdClose, MdOutlineAddAPhoto } from 'react-icons/md';
import { useTranslation } from 'next-i18next';

import { Box } from '../../../../../foundation/Box';
import { Text } from '../../../../../foundation/Text';
import { Button } from '../../../../../common/Button';
import { TextField } from '../../../../../foundation/TextField';

import { WebsitePageContext } from '../../../../../wrappers/WebsitePage/context';
import { authService } from '../../../../../../services/auth/authService';
import { api } from '../../../../../../infra/api';

export function UpdateEmployeeForm({ managers, currentEmployeeInfo }) {
  const auth = authService();
  const token = auth.getToken();

  const router = useRouter();
  const { toggleUpdateModal } = useContext(WebsitePageContext);
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

  useEffect(() => {
    setManagerInfo({
      firstName: currentEmployeeInfo?.firstName,
      lastName: currentEmployeeInfo.lastName,
      phone: currentEmployeeInfo.phone,
      email: currentEmployeeInfo.user?.email,
    });
  }, [currentEmployeeInfo, currentEmployeeInfo.user]);

  async function handleSubmit(event) {
    event.preventDefault();

    if (preview) {
      const fd = new FormData();

      if (image) {
        fd.append('id', currentEmployeeInfo.id);
        fd.append('image', image, image.name);
      }

      const imageResponse = await api.patch('employee/image', fd, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (imageResponse.status === 200) {
        toggleUpdateModal();
        router.push(router.pathname);
      }
    }

    const dataResponse = await api.patch(
      'manager',
      {
        idEmployee: currentEmployeeInfo.id,
        firstName: managerInfo.firstName,
        lastName: managerInfo.lastName,
        phone: managerInfo.phone,
        email: managerInfo.email,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    if (dataResponse.status === 200) {
      toggleUpdateModal();
      router.push(router.pathname);
    }
  }
  console.log(currentEmployeeInfo);
  return (
    <form onSubmit={handleSubmit} key={currentEmployeeInfo.id}>
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
                  <img
                    src={`http://localhost:5000/resources/images/${currentEmployeeInfo.image}`}
                    alt="Uploaded user image"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '6px',
                    }}
                  />
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
                <option
                  value={currentEmployeeInfo.idManager}
                >{`${currentEmployeeInfo.firstName} ${currentEmployeeInfo.lastName}`}</option>
                {managers
                  .filter(
                    (manager) => manager.id !== currentEmployeeInfo.idManager
                  )
                  .map((manager) => (
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
              {t('update_modal_section_title3')}
            </Text>
            <TextField
              type="text"
              placeholder={t('placeholder4')}
              name="email"
              value={managerInfo.email}
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
        <Button>{t('update_btn_add')}</Button>
      </Box>
    </form>
  );
}

UpdateEmployeeForm.defaultProps = {
  currentEmployeeInfo: {},
};
