import React from 'react';
import styled, { css } from 'styled-components';

export const TextStyleVariantsMap = {
  title: css`
    font-size: ${({ theme }) => theme.typographyVariants.title.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.title.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.title.lineHeight};
  `,
  title2: css`
    font-size: ${({ theme }) => theme.typographyVariants.title2.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.title2.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.title2.lineHeight};
  `,
  subtitle: css`
    font-size: ${({ theme }) => theme.typographyVariants.subtitle.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.subtitle.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.subtitle.lineHeight};
  `,
  paragraph1: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${({ theme }) =>
      theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${({ theme }) =>
      theme.typographyVariants.paragraph1.lineHeight};
  `,
  paragraph2: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph2.fontSize};
    font-weight: ${({ theme }) =>
      theme.typographyVariants.paragraph2.fontWeight};
    line-height: ${({ theme }) =>
      theme.typographyVariants.paragraph2.lineHeight};
  `,
  paragraph3: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph3.fontSize};
    font-weight: ${({ theme }) =>
      theme.typographyVariants.paragraph3.fontWeight};
    line-height: ${({ theme }) =>
      theme.typographyVariants.paragraph3.lineHeight};
  `,
};

const TextBase = styled.span`
  ${({ variant }) => TextStyleVariantsMap[variant]}
`;

export function Text({ children, tag, variant, ...props }) {
  return (
    <TextBase as={tag} variant={variant} {...props}>
      {children}
    </TextBase>
  );
}

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
  children: null,
};
