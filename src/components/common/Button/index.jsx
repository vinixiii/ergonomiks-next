import React from 'react';
import styled, { css } from 'styled-components';

import { Link } from '../Link';
import { propToStyle } from '../../../theme/utils/propToStyle';

const ButtonWrapper = styled.button`
  color: #ffffff;
  background: #3f77df;
  font-size: 16px;
  font-weight: 500;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  padding: 6px 24px;
  transition: all ${({ theme }) => theme.transition};
  opacity: 1;

  &:hover,
  &:focus {
    opacity: 0.8;
  }

  ${propToStyle('alignSelf')};
  ${propToStyle('marginTop')};
`;

export function Button({ href, children, ...props }) {
  const hasHref = Boolean(href);
  const tag = hasHref ? Link : 'button';

  return (
    <ButtonWrapper as={tag} href={href} {...props}>
      {children}
    </ButtonWrapper>
  );
}

Button.defaultProps = {
  href: undefined,
};
