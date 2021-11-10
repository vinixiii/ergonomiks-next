import React from 'react';
import styled, { css } from 'styled-components';

import { Link } from '../Link';
import { propToStyle } from '../../../theme/utils/propToStyle';

const GhostButton = css`
  background-color: unset;
  color: ${({ theme }) => theme.colors.primary};
`;

const ButtonWrapper = styled.button`
  height: 36px;
  color: #ffffff;
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  font-weight: 500;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  padding: 6px 24px;
  transition: all ${({ theme }) => theme.transition};
  opacity: 1;

  ${({ ghost }) => ghost && GhostButton};

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
