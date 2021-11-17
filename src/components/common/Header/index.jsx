import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ThemeContext } from 'styled-components';
import { destroyCookie } from 'nookies';
import { useTranslation } from 'next-i18next';

import {
  MdHelpOutline,
  MdMenu,
  MdClose,
  MdSettings,
  MdLogout,
  MdBusiness,
} from 'react-icons/md';

import { HeaderWrapper } from './styles/HeaderWrapper';
import { Box } from '../../foundation/Box';
import { Text } from '../../foundation/Text';
import { Link } from '../Link';
import { Logo } from '../../img/Logo';
import { Button } from '../Button';
import Dropdown from '../Dropdown';
import { authService } from '../../../services/auth/authService';

export function Header() {
  const router = useRouter();
  const { pathname } = router;
  const isPublicPage = !pathname.includes('app');

  const { colors, borderRadius } = useContext(ThemeContext);

  const [isNavDropdownOpen, setIsNavDropdownOpen] = useState(false);
  const [isOptionsDropdownOpen, setIsOptionsDropdownOpen] = useState(false);
  const [user, setUser] = useState('');

  const { t } = useTranslation('header');

  const links = {
    company: [
      {
        text: t('company_nav'),
        url: '/app/company/managers',
      },
      {
        text: t('company_nav2'),
        url: '/app/company/employees',
      },
    ],
    manager: [
      {
        text: t('manager_nav'),
        url: '/app/manager/dashboard',
      },
      {
        text: t('manager_nav2'),
        url: '/app/manager/team',
      },
    ],
    employee: [
      {
        text: t('employee_nav'),
        url: '/app/employee/dashboard',
      },
    ],
  };

  function handleSignOut() {
    destroyCookie({}, 'LOGIN_APP_AUTH');
    router.push('/');
  }

  useEffect(() => {
    const auth = authService();
    const user = auth.getSession();

    if (user !== null) {
      setUser(user);
    }
  }, []);

  return (
    <Box
      width="100%"
      position="fixed"
      display="flex"
      justifyContent="center"
      backgroundColor={colors.primaryBackground}
      boxShadow={`0 2px 2px -2px ${colors.border}`}
    >
      <HeaderWrapper>
        <HeaderWrapper.Left>
          <Logo
            id="logo"
            primaryColor={colors.primary}
            secondaryColor={colors.primaryText}
          />

          <img id="logo-sm" src="/img/logo-sm.svg" alt="Ergonomiks logo" />

          {!isPublicPage && (
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
                  {links[user?.role]?.map((item, index) => (
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
          )}
        </HeaderWrapper.Left>

        <HeaderWrapper.Right>
          {!isPublicPage ? (
            <>
              <Box
                display="flex"
                alignItems="center"
                padding="0 12px"
                gap="18px"
              >
                {user?.role === 'employee' && (
                  <MdHelpOutline className="icon help-icon" size="36" />
                )}
              </Box>
              <Box display="flex" alignItems="center" gap="12px">
                <Box position={{ sm: 'relative' }}>
                  <Box
                    width="48px"
                    height="48px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    padding="2px"
                    border={`2px solid ${colors.primaryText}`}
                    borderRadius={borderRadius}
                    cursor="pointer"
                    onClick={() => {
                      setIsOptionsDropdownOpen(!isOptionsDropdownOpen);
                      setIsNavDropdownOpen(false);
                    }}
                  >
                    {user?.role === 'company' ? (
                      <MdBusiness
                        className="icon"
                        size="36"
                        style={{ display: 'block', margin: 'auto' }}
                      />
                    ) : (
                      <img
                        src="https://github.com/vinixiii.png"
                        alt="Imagem do usuário"
                      />
                    )}
                  </Box>
                  <Dropdown isActive={isOptionsDropdownOpen} alignRight>
                    <ul>
                      <li>
                        <Link href="/app/preferences">
                          <MdSettings className="icon" size="36" />
                          <Text variant="paragraph1">{t('common_nav')}</Text>
                        </Link>
                      </li>
                      <li>
                        <Box
                          display="flex"
                          alignItems="center"
                          gap="12px"
                          cursor="pointer"
                          onClick={handleSignOut}
                        >
                          <MdLogout className="icon" size="36" />
                          <Text variant="paragraph1">{t('common_nav2')}</Text>
                        </Box>
                      </li>
                    </ul>
                  </Dropdown>
                </Box>
              </Box>
            </>
          ) : (
            <>
              <Button href="/app/login" ghost>
                {t('btn_sign_in')}
              </Button>

              <Button href="/contact">{t('btn_contact_us')}</Button>
            </>
          )}
        </HeaderWrapper.Right>
      </HeaderWrapper>
    </Box>
  );
}
