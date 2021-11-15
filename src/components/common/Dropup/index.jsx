import React from 'react';
import { DropupWrapper } from './styles/DropupWrapper';

export default function Dropup({ isActive, alignLeft, alignRight, children }) {
  return (
    <DropupWrapper
      isActive={isActive}
      alignLeft={alignLeft}
      alignRight={alignRight}
    >
      {children}
    </DropupWrapper>
  );
}
