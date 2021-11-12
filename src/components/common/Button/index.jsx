import React from 'react';
import styled, { css } from 'styled-components';

import { Link } from '../Link';
import { propToStyle } from '../../../theme/utils/propToStyle';
import { breakpointsMediaQuery } from '../../../theme/utils/breakpointsMediaQuery';
import { TextStyleVariantsMap } from '../../foundation/Text';

const GhostButton = css`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primaryText};
`;

const ButtonWrapper = styled.button`
  height: 36px;
  display: flex;
  align-items: center;
  color: #ffffff;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  padding: 6px 24px;
  transition: all ${({ theme }) => theme.transition};
  opacity: 1;

  ${({ ghost }) => ghost && GhostButton};

  ${breakpointsMediaQuery({
    xs: css`
      ${TextStyleVariantsMap.paragraph3}
    `,
    md: css`
      ${TextStyleVariantsMap.paragraph1}
    `,
  })}

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
