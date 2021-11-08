import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ThemeContext } from 'styled-components';

import {
  MdLightMode,
  MdHelpOutline,
  MdMenu,
  MdClose,
  MdLanguage,
  MdSettings,
  MdLogout,
} from 'react-icons/md';

import { HeaderWrapper } from './styles/HeaderWrapper';
import { Box } from '../../foundation/Box';
import { Text } from '../../foundation/Text';
import { Link } from '../Link';
import { Logo } from '../../img/Logo';
import { setCookie, destroyCookie } from 'nookies';
import Dropdown from '../Dropdown';

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

export function Header() {
  const router = useRouter();
  const { locale } = router;
  const pathname = router.pathname;

  const [isNavDropdownOpen, setIsNavDropdownOpen] = useState(false);
  const [isOptionsDropdownOpen, setIsOptionsDropdownOpen] = useState(false);
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

          <Box position={{ sm: 'relative' }}>
            <Box
              display={{ lg: 'none' }}
              onClick={() => {
                setIsNavDropdownOpen(!isNavDropdownOpen);
                setIsOptionsDropdownOpen(false);
              }}
            >
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
            <Dropdown
              tag="nav"
              isActive={isNavDropdownOpen}
              alignLeft
              isHeaderNav
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
            </Dropdown>
          </Box>
        </HeaderWrapper.Left>

        <HeaderWrapper.Right>
          <Box
            display="flex"
            alignItems="center"
            padding="0 12px"
            gap="18px"
            // borderRight={`1px solid ${colors.border}`}
          >
            <MdHelpOutline className="icon help-icon" size="36" />
          </Box>
          <Box display="flex" alignItems="center" gap="12px">
            {/* <Box
              textAlign="right"
              display={{ xs: 'none', lg: 'flex' }}
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
            <Box position={{ sm: 'relative' }}>
              <Box
                width="48px"
                height="48px"
                padding="2px"
                border={`2px solid ${colors.primaryText}`}
                borderRadius={borderRadius}
                cursor="pointer"
                onClick={() => {
                  setIsOptionsDropdownOpen(!isOptionsDropdownOpen);
                  setIsNavDropdownOpen(false);
                }}
              >
                <img
                  src="https://github.com/vinixiii.png"
                  alt="Imagem do usuário"
                />
              </Box>
              <Dropdown isActive={isOptionsDropdownOpen} alignRight>
                <ul>
                  <li>
                    <Link href="/app/preferences">
                      <MdSettings className="icon" size="36" />
                      <Text variant="paragraph1">Preferences</Text>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/app/login"
                      onClick={() => destroyCookie(null, 'LOGIN_APP_AUTH')}
                    >
                      <MdLogout className="icon" size="36" />
                      <Text variant="paragraph1">Logout</Text>
                    </Link>
                  </li>
                </ul>
              </Dropdown>
            </Box>
          </Box>
        </HeaderWrapper.Right>
      </HeaderWrapper>
    </Box>
  );
}
