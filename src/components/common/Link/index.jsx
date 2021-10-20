import React from 'react';
import styled from 'styled-components';
import NextLink from 'next/link';

const StyledLink = styled.a`
  color: inherit;
  text-decoration: none;
  opacity: 1;
`;

export function Link({ href, children, ...props }) {
  return (
    <NextLink href={href} passHref>
      <StyledLink {...props}>{children}</StyledLink>
    </NextLink>
  );
}
