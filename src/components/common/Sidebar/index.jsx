import React from 'react';
import { useRouter } from 'next/router';
import {
  MdBusiness,
  MdPieChart,
  MdSupervisorAccount,
  MdGroups,
  MdAccountBox,
  MdLogout,
} from 'react-icons/md';
import { RiArrowLeftRightFill } from 'react-icons/ri';

import { SidebarWrapper } from './styles/SidebarWrapper';
import { SidebarItem } from './styles/SidebarItem';
import { Logo } from '../../img/Logo';
import { Text } from '../../foundation/Text';
import { Link } from '../Link';

const role = 'manager';

const links = {
  admin: [
    {
      icon: <MdBusiness />,
      text: 'Companies',
      url: '/companies',
    },
  ],
  company: [
    {
      icon: <MdSupervisorAccount />,
      text: 'Managers',
      url: '/managers',
    },
    {
      icon: <MdGroups />,
      text: 'Employees',
      url: '/employees',
    },
  ],
  manager: [
    {
      icon: <MdPieChart />,
      text: 'Dashboard',
      url: '/',
    },
    {
      icon: <MdGroups />,
      text: 'Team',
      url: '/team',
    },
    {
      icon: <MdAccountBox />,
      text: 'Profile',
      url: '/profile',
    },
  ],
  employee: [
    {
      icon: <MdPieChart />,
      text: 'Dashboard',
      url: '/dashboard',
    },
  ],
};

export function Sidebar() {
  const router = useRouter();
  const pathname = router.pathname;

  console.log(pathname);

  return (
    <SidebarWrapper>
      <SidebarWrapper.Top>
        <Logo />
      </SidebarWrapper.Top>

      <SidebarWrapper.Center>
        {links[role].map((item, index) => (
          <li key={index}>
            <Link href={item.url}>
              <SidebarItem active={pathname === item.url}>
                {item.icon}
                <Text>{item.text}</Text>
              </SidebarItem>
            </Link>
          </li>
        ))}
      </SidebarWrapper.Center>

      <SidebarWrapper.Bottom>
        <SidebarItem>
          <RiArrowLeftRightFill style={{ fontSize: 24 }} />
          <Text>Minimize</Text>
        </SidebarItem>

        <SidebarItem>
          <MdLogout style={{ fontSize: 24 }} />
          <Text>Sign out</Text>
        </SidebarItem>
      </SidebarWrapper.Bottom>
    </SidebarWrapper>
  );
}
