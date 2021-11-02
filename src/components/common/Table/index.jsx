import React from 'react';
import { MdEdit, MdClose } from 'react-icons/md';

import { TableWrapper } from './styles/TableWrapper';
import { Text } from '../../foundation/Text';

export function Table({ title, columns, rows }) {
  const rowData = rows.map((item, index) => {
    const items = [];
    let i = 0;

    for (const key in item) {
      items.push({
        key: columns[i],
        value: item[key],
      });

      i++;
    }

    return (
      <tr key={index}>
        {items.map((row, rowIndex) => (
          <td key={rowIndex}>
            <Text variant="paragraph3" color="primaryText">
              {row.value}
            </Text>
          </td>
        ))}
        <td>
          <div id="icons">
            <MdEdit className="icon edit-icon" />
            <MdClose className="icon close-icon" />
          </div>
        </td>
      </tr>
    );
  });

  return (
    <TableWrapper>
      <TableWrapper.Header>
        <Text variant="subtitle" color="primaryText">
          {title}
        </Text>
      </TableWrapper.Header>
      <TableWrapper.Body>
        <table>
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={index}>
                  <Text variant="paragraph1" color="primaryText">
                    {column}
                  </Text>
                </th>
              ))}

              <th>
                <Text variant="paragraph1" color="primaryText">
                  Actions
                </Text>
              </th>
            </tr>
          </thead>
          <tbody>{rowData}</tbody>
        </table>
      </TableWrapper.Body>
    </TableWrapper>
  );
}
