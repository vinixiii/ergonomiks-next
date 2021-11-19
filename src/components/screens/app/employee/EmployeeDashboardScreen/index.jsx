import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { Box } from '../../../../foundation/Box';
import { Grid } from '../../../../foundation/Grid';

export function EmployeeDashboardScreen({ user }) {
  const { colors, borderRadius } = useContext(ThemeContext);
  console.log(user);

  return (
    <Box backgroundColor={colors.primaryBackground}>
      <Grid.Container>
        <Grid.Row>
          <Grid.Column>
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
                src={`http://localhost:5000/resources/images/${user?.jti}.png`}
                alt="Imagem do usuário"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>
          </Grid.Column>
        </Grid.Row>
      </Grid.Container>
    </Box>
  );
}
