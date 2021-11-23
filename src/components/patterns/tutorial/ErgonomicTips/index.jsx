import React, { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { useTranslation } from 'next-i18next';

import { Box } from '../../../foundation/Box';
import { Text } from '../../../foundation/Text';
import { Button } from '../../../common/Button';
import { WebsitePageContext } from '../../../wrappers/WebsitePage/context';

export function ErgonomicTips() {
  const { toggleTipsModal } = useContext(WebsitePageContext);
  const { colors } = useContext(ThemeContext);

  const { t } = useTranslation('header');

  const [stage, setStage] = useState(0);

  return (
    <>
      <Box padding="24px 40px">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          gap="24px"
        >
          {stage === 0 && (
            <img
              src="/img/tips/tip-illustration.svg"
              alt="Illustration"
              style={{ display: 'block', maxWidth: '100%' }}
            />
          )}
          {stage === 1 && (
            <img
              src="/img/tips/tip-illustration2.svg"
              alt="Illustration"
              style={{ display: 'block', maxWidth: '100%' }}
            />
          )}
          {stage === 2 && (
            <img
              src="/img/tips/tip-illustration3.svg"
              alt="Illustration"
              style={{ display: 'block', maxWidth: '100%' }}
            />
          )}
          {stage === 3 && (
            <img
              src="/img/tips/tip-illustration4.svg"
              alt="Illustration"
              style={{ display: 'block', maxWidth: '100%' }}
            />
          )}
          <Box
            display="flex"
            flexWrap="wrap"
            alignItems="center"
            height="165px"
          >
            {stage === 0 && (
              <>
                <Text tag="p">{t('text')}</Text>
                <Text tag="p">{t('text2')}</Text>
              </>
            )}
            {stage === 1 && (
              <>
                <Text tag="p">{t('text_stage2')}</Text>
                <Text tag="p">{t('text2_stage2')}</Text>
              </>
            )}
            {stage === 2 && (
              <>
                <Text tag="p">{t('text_stage3')}</Text>
              </>
            )}
            {stage === 3 && (
              <>
                <Text tag="p">{t('text_stage4')}</Text>
                <Text tag="p">{t('text2_stage4')}</Text>
              </>
            )}
          </Box>
        </Box>
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
