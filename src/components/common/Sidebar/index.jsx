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

const links = {
  admin: [
    {
      icon: <MdBusiness />,
      text: 'Companies',
      url: '/app/admin/companies',
    },
  ],
  company: [
    {
      icon: <MdSupervisorAccount />,
      text: 'Managers',
      url: '/app/company/managers',
    },
    {
      icon: <MdGroups />,
      text: 'Employees',
      url: '/app/company/employees',
    },
  ],
  manager: [
    {
      icon: <MdPieChart />,
      text: 'Dashboard',
      url: '/app/manager/dashboard',
    },
    {
      icon: <MdGroups />,
      text: 'Team',
      url: '/app/manager/team',
    },
    {
      icon: <MdAccountBox />,
      text: 'Profile',
      url: '/app/manager/profile',
    },
  ],
  employee: [
    {
      icon: <MdPieChart />,
      text: 'Dashboard',
      url: '/app/employee/dashboard',
    },
  ],
};

export function Sidebar() {
  const router = useRouter();
  const pathname = router.pathname;
  const role = pathname.split('/')[2];

  console.log(pathname);

  return (
    <SidebarWrapper>
      <SidebarWrapper.Top>
        <Logo />
      </SidebarWrapper.Top>

      <SidebarWrapper.Center>
        {links[role]?.map((item, index) => (
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
        <li>
          <SidebarItem>
            <RiArrowLeftRightFill style={{ fontSize: 24 }} />
            <Text>Minimize</Text>
          </SidebarItem>
        </li>

        <li>
          <Link href="/app/login">
            <SidebarItem>
              <MdLogout style={{ fontSize: 24 }} />
              <Text>Sign out</Text>
            </SidebarItem>
          </Link>
        </li>
      </SidebarWrapper.Bottom>
    </SidebarWrapper>
  );
}
