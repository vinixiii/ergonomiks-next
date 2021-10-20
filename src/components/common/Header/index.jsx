import React from 'react';

import { HeaderWrapper } from './styles/HeaderWrapper';
import { Text } from '../../foundation/Text';

export function Header() {
  return (
    <HeaderWrapper>
      <HeaderWrapper.Left>
        <Text variant="paragraph3">Vinícius / Dashboard</Text>
      </HeaderWrapper.Left>

      <HeaderWrapper.Right>
        <div></div>
      </HeaderWrapper.Right>
    </HeaderWrapper>
  );
}
