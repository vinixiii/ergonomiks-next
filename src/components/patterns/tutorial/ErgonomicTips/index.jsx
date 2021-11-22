import React, { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';

import { Box } from '../../../foundation/Box';
import { Text } from '../../../foundation/Text';
import { Button } from '../../../common/Button';
import { WebsitePageContext } from '../../../wrappers/WebsitePage/context';

export function ErgonomicTips() {
  const { toggleTipsModal } = useContext(WebsitePageContext);
  const { colors } = useContext(ThemeContext);
  const [stage, setStage] = useState(0);

  return (
    <>
      <Box padding="24px 40px">
        {stage === 0 && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            gap="24px"
          >
            <Box height="287px">
              <img
                src="/img/tips/tip-illustration.svg"
                alt="Illustration"
                style={{ display: 'block', maxWidth: '100%' }}
              />
            </Box>
            <Box
              display="flex"
              flexWrap="wrap"
              alignItems="center"
              height="130px"
            >
              <Text tag="p">
                The keyboard, like the mouse, should be in line with your elbows
                when bent.
              </Text>
              <Text tag="p">
                The working screen must be at eye level. If you are using a
                notebook, it can be difficult to use the keyboard. An external
                keyboard solves the problem.
              </Text>
            </Box>
          </Box>
        )}
        {stage === 1 && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            gap="24px"
          >
            <Box display="flex" alignItems="center" height="287px">
              <img
                src="/img/tips/tip02-illustration.svg"
                alt="Illustration"
                style={{ display: 'block', maxWidth: '100%' }}
              />
            </Box>
            <Box
              display="flex"
              flexWrap="wrap"
              alignItems="center"
              height="130px"
            >
              <Text tag="p">
                The spine should be straight, in line with the hips. It is
                recommended to use a chair with a backrest to maintain good
                posture.
              </Text>
              <Text tag="p">
                Feet should be flat on the floor or on a step or box if the seat
                is too high.
              </Text>
            </Box>
          </Box>
        )}
        {stage === 2 && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            gap="24px"
          >
            <Box height="287px">
              <img
                src="/img/tips/tip03-illustration.svg"
                alt="Illustration"
                style={{ display: 'block', maxWidth: '100%' }}
              />
            </Box>
            <Box
              display="flex"
              flexWrap="wrap"
              alignItems="center"
              height="130px"
            >
              <Text tag="p">
                Sometimes it may be necessary to stretch out in the chair and
                it's okay to do so, as long as you don't stay in that position
                for too long!
              </Text>
            </Box>
          </Box>
        )}
        {stage === 3 && (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            gap="24px"
          >
            <Box height="287px">
              <img
                src="/img/tips/tip04-illustration.svg"
                alt="Illustration"
                style={{ display: 'block', maxWidth: '100%' }}
              />
            </Box>
            <Box
              display="flex"
              flexWrap="wrap"
              alignItems="center"
              height="130px"
            >
              <Text tag="p">
                Varying your body position and taking breaks to lift and stretch
                your limbs every hour you work relieves pressure on your joints,
                as well as promoting good circulation.
              </Text>
              <Text tag="p">
                In your free time, try to include times for physical activity:
                they prepare your body for the next shift.
              </Text>
            </Box>
          </Box>
        )}
      </Box>
      <Box
        display="flex"
        justifyContent="flex-end"
        gap="18px"
        padding="24px 40px"
        borderTop={`1px solid ${colors.border}`}
      >
        {stage > 0 && (
          <Button onClick={() => stage > 0 && setStage(stage - 1)} ghost>
            Back
          </Button>
        )}
        <Button
          onClick={async () => {
            if (stage < 3) setStage(stage + 1);

            if (stage === 3) {
              toggleTipsModal();

              setTimeout(() => {
                setStage(0);
              }, 1000);
            }
          }}
        >
          {stage === 3 ? 'Done' : 'Next'}
        </Button>
      </Box>
    </>
  );
}
