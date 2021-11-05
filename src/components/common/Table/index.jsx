import React from 'react';
import { MdEdit, MdClose } from 'react-icons/md';

import { TableWrapper } from './styles/TableWrapper';
import { Text } from '../../foundation/Text';

export function Table({ title, children }) {
  return (
    <TableWrapper>
      <TableWrapper.Header>
        <Text variant="subtitle" color="primaryText">
          {title}
        </Text>
      </TableWrapper.Header>
      <TableWrapper.Body>
        <table>{children}</table>
      </TableWrapper.Body>
    </TableWrapper>
  );
}
