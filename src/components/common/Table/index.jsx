import React from 'react';

import { TableWrapper } from './styles/TableWrapper';
import { Text } from '../../foundation/Text';

export function Table({ children, title }) {
  return (
    <TableWrapper>
      <TableWrapper.Header>
        <Text variant="subtitle">{title}</Text>
      </TableWrapper.Header>
      <TableWrapper.Body>{children}</TableWrapper.Body>
    </TableWrapper>
  );
}
