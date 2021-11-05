import React, { useContext, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { ThemeContext } from 'styled-components';
import { MdClose, MdOutlineAddAPhoto } from 'react-icons/md';

import { Box } from '../../foundation/Box';
import { Text } from '../../foundation/Text';
import { TextField } from '../../foundation/TextField';
import { Button } from '../../common/Button';
import { WebsitePageContext } from '../../wrappers/WebsitePage/context';
import { api } from '../../infra/api';

export function RegisterManagerForm() {
  const router = useRouter();
  const { toggleRegisterManagerModal } = useContext(WebsitePageContext);
  const { colors, borderRadius } = useContext(ThemeContext);

  const fileInputRef = useRef();
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();

  const [managerInfo, setManagerInfo] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
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
    fd.append('idCompany', 'aa67cbd8-85c0-46a3-ae98-01b698589417');

    console.table([...fd]);

    const result = await api.post('manager/register', fd);

    if (result.status === 200) {
      console.log(result);

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
          Photo
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
          <Box padding="48px" display="flex" flexDirection="column" gap="18px">
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
                    size="28"
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
                  <Text variant="paragraph3">No image chosen yet</Text>
                </>
              )}
            </Box>

            <Button
              onClick={(event) => {
                event.preventDefault();
                fileInputRef.current.click();
              }}
            >
              Chose file
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
            gap="16px"
            minWidth="180px"
          >
            <Text tag="h3" variant="paragraph1" color="primaryText">
              General info
            </Text>
            <TextField
              type="text"
              placeholder="First Name"
              name="firstName"
              value={managerInfo.firstName}
              onChange={handleChangeFieldValue}
            />
            <TextField
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={managerInfo.lastName}
              onChange={handleChangeFieldValue}
            />
            <TextField
              type="text"
              placeholder="Phone"
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
              Email and password
            </Text>
            <TextField
              type="text"
              placeholder="Email"
              name="email"
              value={managerInfo.email}
              onChange={handleChangeFieldValue}
            />
            <TextField
              type="password"
              placeholder="Password"
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
        <Button>Add manager</Button>
      </Box>
    </form>
  );
}
