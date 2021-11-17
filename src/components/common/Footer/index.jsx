import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { useRouter } from 'next/router';
import { setCookie } from 'nookies';

import { FooterWrapper } from './styles/FooterWrapper';
import { Box } from '../../foundation/Box';
import { Text } from '../../foundation/Text';
import Dropdown from '../Dropdown';
import { MdLanguage, MdExpandMore, MdExpandLess } from 'react-icons/md';
import Dropup from '../Dropup';

export default function Footer() {
  const router = useRouter();
  const { locale } = router;

  const { colors, borderRadius } = useContext(ThemeContext);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const changeLanguage = (e) => {
    const locale = e.target.getAttribute('name');
    if (locale !== router.locale) {
      router.push(router.pathname, router.asPath, { locale });
    }
  };

  useEffect(() => {
    setCookie(null, 'NEXT_LOCALE', locale, {
      path: '/',
      maxAge: 86400 * 7,
    });
  }, [locale]);

  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="center"
      backgroundColor={colors.secondaryBackground}
      boxShadow={`0 -2px 2px -2px ${colors.border}`}
    >
      <FooterWrapper>
        <Box position="relative">
          <Box
            display="flex"
            alignItems="center"
            gap="12px"
            padding="0 12px"
            borderRadius={borderRadius}
            cursor="pointer"
            onClick={() => {
              setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
            }}
          >
            <MdLanguage
              className="icon"
              size="36"
              style={{ display: 'block' }}
            />
            <Text variant="paragraph2">
              {locale === 'en-US' ? 'English' : 'Português (Brasil)'}
            </Text>
            {isLanguageDropdownOpen ? (
              <MdExpandLess
                className="icon"
                size="36"
                style={{ display: 'block' }}
              />
            ) : (
              <MdExpandMore
                className="icon"
                size="36"
                style={{ display: 'block' }}
              />
            )}
          </Box>
          <Dropup isActive={isLanguageDropdownOpen} alignLeft>
            <ul>
              <li>
                <img
                  src="/img/usa.svg"
                  alt="Bandeira dos Estados Unidos da América"
                />
                <Text
                  lineHeight="36px"
                  variant="paragraph2"
                  name="en-US"
                  onClick={changeLanguage}
                  color={locale === 'en-US' ? 'primaryText' : undefined}
                >
                  {locale === 'en-US' ? 'English' : 'Inglês'}
                </Text>
              </li>
              <li>
                <img src="/img/bra.svg" alt="Bandeira do Brasil" />
                <Text
                  lineHeight="36px"
                  variant="paragraph2"
                  name="pt-BR"
                  onClick={changeLanguage}
                  color={locale === 'pt-BR' ? 'primaryText' : undefined}
                >
                  {locale === 'en-US'
                    ? 'Portuguese (Brasil)'
                    : 'Português (Brasil)'}
                </Text>
              </li>
              {/* <li>
                <img src="/img/esp.svg" alt="Bandeira da Espanha" />
                <Text lineHeight="36px" variant="paragraph2">
                  es-ES
                </Text>
              </li> */}
            </ul>
          </Dropup>
        </Box>
        <Text>&copy; Ergonomiks</Text>
      </FooterWrapper>
    </Box>
  );
}
