import styled, { css } from 'styled-components';
import { Text } from '../../Text';

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  color: ${({ theme }) => theme.colors.secondaryText};

  ${({ hasIcon }) =>
    hasIcon &&
    css`
      padding-left: 6px;
    `};

  > svg {
    font-size: 24px;
  }

  ${({ theme, isFieldInvalid }) =>
    isFieldInvalid &&
    css`
      border-color: ${theme.colors.red};
    `}
`;

export const Input = styled(Text)`
  width: 100%;
  height: 36px;
  border: none;
  outline: 0;
  padding: 6px 12px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  color: ${({ theme }) => theme.colors.secondaryText};
`;

Input.defaultProps = {
  tag: 'input',
  variant: 'paragraph2',
};
