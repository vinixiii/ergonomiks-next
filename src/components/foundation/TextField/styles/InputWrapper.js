import styled, { css } from 'styled-components';
import { Text } from '../../Text';

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.tertiaryBackground};
  padding-left: 6px;
  color: ${({ theme }) => theme.colors.secondaryText};

  > svg {
    font-size: 24px;
  }
`;

export const Input = styled(Text)`
  width: 100%;
  height: 36px;
  border: none;
  outline: 0;
  padding: 6px 12px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.tertiaryBackground};
`;

Input.defaultProps = {
  tag: 'input',
  variant: 'paragraph2',
  color: 'secondaryText',
};
