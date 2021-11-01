import styled from 'styled-components';

export const TableWrapper = styled.div`
  flex: 1;
  margin: 0 16px 40px;
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  border: 1px solid ${({ theme }) => theme.colors.border};
  /* box-shadow: ${({ theme }) => theme.boxShadow}; */
  border-radius: ${({ theme }) => theme.borderRadius};
`;

TableWrapper.Header = styled.div`
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  border-radius: ${({ theme }) => theme.borderRadius};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

TableWrapper.Body = styled.div`
  position: relative;
  height: calc(100% - 73px);
  overflow-y: auto;

  table {
    position: absolute;
    width: 100%;
    text-align: left;
    border-spacing: 0;

    thead tr th,
    tbody tr td {
      padding: 18px 24px;
      border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    }

    #icons {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 12px;
    }

    .icon {
      font-size: 28px;
      padding: 4px;
      background-color: ${({ theme }) => theme.colors.tertiaryBackground};
      color: ${({ theme }) => theme.colors.secondaryText};
      cursor: pointer;
      transition: all ${({ theme }) => theme.transition};
      border-radius: ${({ theme }) => theme.borderRadius};
    }

    .edit-icon {
      &:hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }

    .delete-icon {
      &:hover {
        color: ${({ theme }) => theme.colors.red};
      }
    }
  }
`;
