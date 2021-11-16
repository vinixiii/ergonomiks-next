import React from 'react';

import { Grid } from '../../foundation/Grid';
import { Box } from '../../foundation/Box';
import { Text } from '../../foundation/Text';
import { TextField } from '../../foundation/TextField';
import { Button } from '../../common/Button';

export function ContactScreen() {
  return (
    <Grid.Container display="flex" flex="1">
      <Grid.Row
        marginTop="auto"
        marginBottom="auto"
        padding={{ xs: '32px 0', lg: '64px 0' }}
      >
        <Grid.Column
          display="flex"
          flexDirection="column"
          gap="94px"
          paddingTop="32px"
          paddingBottom="32px"
          value={{ xs: 12, lg: 6 }}
        >
          <Box>
            <Text tag="h1" marginBottom="24px" variant="title">
              Contact our team!
            </Text>
            <Text variant="paragraph1">
              Fill up the form and send us a message. Our team will be happy to
              give you more information about our system!
            </Text>
          </Box>
          <img
            src="/img/contact-illustration.svg"
            alt="Girl with a letter on her hands"
            style={{ display: 'block', margin: 'auto', maxWidth: '100%' }}
          />
        </Grid.Column>
        <Grid.Column
          display="flex"
          flexDirection="column"
          paddingTop="32px"
          paddingBottom="32px"
          gap="90px"
          value={{ xs: 12, lg: 6 }}
        >
          <Box display="flex" flexDirection="column" gap="16px">
            <TextField placeholder="First name" />
            <TextField placeholder="Last name" />
            <TextField placeholder="Work email" />
            <TextField placeholder="Company name" />
            <TextField placeholder="Country" />
            <TextField
              tag="textarea"
              minHeight="90px"
              // resize="none"
              placeholder="Message, questions, suggestions..."
            />
          </Box>
          <Button alignSelf={{ md: 'flex-end' }}>Submit</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid.Container>
  );
}
