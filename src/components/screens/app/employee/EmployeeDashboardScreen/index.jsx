import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { MdEmail, MdLocalPhone } from 'react-icons/md';

import { Box } from '../../../../foundation/Box';
import { Grid } from '../../../../foundation/Grid';
import { Text } from '../../../../foundation/Text';

import { patternMask } from '../../../../../infra/generic/patternMask';

export function EmployeeDashboardScreen({ session, userInfo }) {
  const { colors, borderRadius } = useContext(ThemeContext);

  return (
    <>
      <Box backgroundColor={colors.primaryBackground}>
        <Grid.Container>
          <Grid.Row>
            <Grid.Column padding="40px 16px">
              <Box display="flex" gap="24px">
                <Box
                  width="148px"
                  height="148px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  padding="2px"
                  border={`2px solid ${colors.primaryText}`}
                  borderRadius={borderRadius}
                >
                  <img
                    src={`http://localhost:5000/resources/images/${session.image}`}
                    alt="User image"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                >
                  <Text
                    variant="title2"
                    color="primaryText"
                  >{`${userInfo.firstName} ${userInfo.lastName}`}</Text>
                  <Text variant="paragraph3" color="secondaryText">
                    Member since:{' '}
                    {new Date(userInfo.creationDate).toLocaleDateString()}
                  </Text>
                  <Box display="flex" flexDirection="column" gap="16px">
                    <Box display="flex" alignItems="center" gap="16px">
                      <MdEmail size="24" color={colors.primary} />
                      <Text variant="paragraph2" color="primaryText">
                        {userInfo.user.email}
                      </Text>
                    </Box>
                    <Box display="flex" alignItems="center" gap="16px">
                      <MdLocalPhone size="24" color={colors.primary} />
                      <Text variant="paragraph2" color="primaryText">
                        {patternMask(userInfo.phone, '(##) #####-####')}
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid.Column>
          </Grid.Row>
        </Grid.Container>
      </Box>
      <Grid.Container>
        <Grid.Row>
          <Grid.Column padding="40px 0"></Grid.Column>
        </Grid.Row>
      </Grid.Container>
    </>
  );
}
