import React from 'react';
import styled from 'styled-components';
import NextLink from 'next/link';
import { propToStyle } from '../../../theme/utils/propToStyle';

const StyledLink = styled.a`
  color: inherit;
  text-decoration: none;
  opacity: 1;

  ${propToStyle('display')};
  ${propToStyle('alignItems')};
`;

export function Link({ href, locale, children, ...props }) {
  return (
    <NextLink href={href} locale={locale} passHref>
      <StyledLink {...props}>{children}</StyledLink>
    </NextLink>
  );
}
