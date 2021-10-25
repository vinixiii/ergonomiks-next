import styled, { css } from 'styled-components';
import { Text } from '../../Text';

export const InputWrapper = styled.div`
  margin-bottom: 16px;
`;

export const Input = styled(Text)`
  width: 100%;
  height: 36px;
  border: 1px solid ${({ theme }) => theme.colors.secondaryText};
  padding: 6px 12px;
  border-radius: ${({ theme }) => theme.borderRadius};
  outline-color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.tertiaryBackground};
`;

Input.defaultProps = {
  tag: 'input',
  variant: 'paragraph2',
  color: 'secondaryText',
};
