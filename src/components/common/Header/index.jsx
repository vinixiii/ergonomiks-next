import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ThemeContext } from 'styled-components';

import {
  MdLightMode,
  MdHelpOutline,
  MdMenu,
  MdClose,
  MdLanguage,
} from 'react-icons/md';

import { HeaderWrapper } from './styles/HeaderWrapper';
import { Box } from '../../foundation/Box';
import { Text } from '../../foundation/Text';
import { Link } from '../Link';
import { Logo } from '../../img/Logo';
import { setCookie } from 'nookies';

const links = {
  admin: [
    {
      text: 'Companies',
      url: '/app/admin/companies',
    },
  ],
  company: [
    {
      text: 'Managers',
      url: '/app/company/managers',
    },
    {
      text: 'Employees',
      url: '/app/company/employees',
    },
  ],
  manager: [
    {
      text: 'Dashboard',
      url: '/app/manager/dashboard',
    },
    {
      text: 'Team',
      url: '/app/manager/team',
    },
    {
      text: 'Profile',
      url: '/app/manager/profile',
    },
  ],
  employee: [
    {
      text: 'Dashboard',
      url: '/app/employee/dashboard',
    },
  ],
};

const languages = ['en-US', 'pt-BR'];

export function Header() {
  const router = useRouter();
  const { locale } = router;
  const pathname = router.pathname;

  const [isNavDropdownOpen, setIsNavDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const { colors, borderRadius } = useContext(ThemeContext);

  const role = pathname.split('/')[2];

  const changeLanguage = (language) => {
    const locale = language;
    router.push(router.pathname, router.asPath, { locale });
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
      backgroundColor={colors.primaryBackground}
      borderBottom={`1px solid ${colors.border}`}
    >
      <HeaderWrapper>
        <HeaderWrapper.Left>
          <Logo
            id="logo"
            primaryColor={colors.primary}
            secondaryColor={colors.primaryText}
          />

          <img id="logo-sm" src="/img/logo-sm.svg" alt="Ergonomiks logo" />

          <HeaderWrapper.Nav>
            <nav id="long-nav">
              <ul>
                {links[role]?.map((item, index) => (
                  <li
                    key={index}
                    className={pathname === item.url ? 'active' : ''}
                  >
                    <Link href={item.url}>
                      <Text variant="paragraph1">{item.text}</Text>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <Box id="nav-dropdown" className="dropdown">
              <Box onClick={() => setIsNavDropdownOpen(!isNavDropdownOpen)}>
                {isNavDropdownOpen ? (
                  <MdClose
                    className="icon menu-icon"
                    size="36"
                    style={{ display: 'block' }}
                  />
                ) : (
                  <MdMenu
                    className="icon menu-icon"
                    size="36"
                    style={{ display: 'block' }}
                  />
                )}
              </Box>
              <nav
                className={`dropdown-content ${
                  isNavDropdownOpen ? 'dropdown-active' : ''
                }`}
              >
                <ul>
                  {links[role]?.map((item, index) => (
                    <li
                      key={index}
                      className={pathname === item.url ? 'active' : ''}
                    >
                      <Link href={item.url}>
                        <Text variant="paragraph1">{item.text}</Text>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </Box>
          </HeaderWrapper.Nav>
        </HeaderWrapper.Left>

        <HeaderWrapper.Right>
          <Box
            display="flex"
            alignItems="center"
            padding="0 18px"
            gap="18px"
            borderRight={`1px solid ${colors.border}`}
          >
            <Box>
              <MdLightMode
                className="icon light-icon"
                size="36"
                style={{ display: 'block' }}
              />
            </Box>
            <MdHelpOutline className="icon help-icon" size="36" />

            <Box id="language-dropdown" className="dropdown">
              <Box
                display="flex"
                alignItems="center"
                backgroundColor={colors.tertiaryBackground}
                borderRadius={borderRadius}
                cursor="pointer"
                onClick={() =>
                  setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
                }
              >
                <MdLanguage
                  className="icon"
                  size="36"
                  style={{ display: 'block' }}
                />
                <Text id="language" variant="paragraph2" paddingRight="6px">
                  {locale}
                </Text>
              </Box>
              <Box
                id="language-dropdown-content"
                className={`dropdown-content ${
                  isLanguageDropdownOpen ? 'dropdown-active' : ''
                }`}
              >
                <ul>
                  {languages.map((language) => (
                    <li
                      key={language}
                      className={locale === language ? 'active' : ''}
                    >
                      <Text
                        variant="paragraph1"
                        onClick={() => changeLanguage(language)}
                      >
                        {language}
                      </Text>
                    </li>
                  ))}
                </ul>
              </Box>
            </Box>
          </Box>
          <Box display="flex" alignItems="center" gap="12px">
            {/* <Box
              textAlign="right"
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <Text variant="paragraph1" color="primaryText">
                Vinícius Figueiroa
              </Text>
              <Text variant="paragraph1" color="secondaryText">
                vinicius.figueiroa@4people.com
              </Text>
            </Box> */}
            <Box width="36px" height="36px">
              <img
                src="https://github.com/vinixiii.png"
                alt="Imagem do usuário"
              />
            </Box>
          </Box>
        </HeaderWrapper.Right>
      </HeaderWrapper>
    </Box>
  );
}
