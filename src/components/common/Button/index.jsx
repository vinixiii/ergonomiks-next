import React from 'react';
import styled, { css } from 'styled-components';

const ButtonWrapper = styled.button`
  color: #ffffff;
  background: #3f77df;
  font-size: 16px;
  font-weight: 500;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  padding: 6px 24px;
`;

export function Button({ children, ...props }) {
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>;
}
