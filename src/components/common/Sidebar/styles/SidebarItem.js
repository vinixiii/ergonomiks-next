import styled, { css } from 'styled-components';

export const SidebarItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 12px 0 12px 12px;

  svg {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.primary};
  }

  ${({ active }) =>
    active &&
    css`
      border-left: 6px solid ${({ theme }) => theme.colors.primary}}
      color: ${({ theme }) => theme.colors.primary};
      background-color: ${({ theme }) => theme.colors.tertiaryBackground};      
  `}

  &:hover {
    background-color: ${({ theme }) => theme.colors.tertiaryBackground};
  }
`;
