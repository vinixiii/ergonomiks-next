import React from 'react';
import { Box } from '../../foundation/Box';
import { DropdownWrapper } from './styles/DropdownWrapper';

export default function Dropdown({
  tag,
  isActive,
  alignLeft,
  alignRight,
  isHeaderNav,
  children,
  ...props
}) {
  return (
    <DropdownWrapper
      as={tag}
      isActive={isActive}
      alignLeft={alignLeft}
      alignRight={alignRight}
      isHeaderNav={isHeaderNav}
      {...props}
    >
      {children}
    </DropdownWrapper>
  );
}
