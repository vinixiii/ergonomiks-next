import styled from 'styled-components';

export const PreferencesScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 24px;
  margin-bottom: 40px;

  .language-option {
    cursor: pointer;
    border-left: 3px solid ${({ theme }) => theme.colors.primaryBackground};
    border-radius: 0 ${({ theme }) => theme.borderRadius}
      ${({ theme }) => theme.borderRadius} 0;
    color: ${({ theme }) => theme.colors.secondaryText};

    &.active {
      border-left: 3px solid ${({ theme }) => theme.colors.primary};
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.tertiaryBackground};
    }
  }
`;
