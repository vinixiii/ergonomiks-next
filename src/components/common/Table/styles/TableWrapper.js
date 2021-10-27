import styled from 'styled-components';

export const TableWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadius};

  table {
    width: 100%;
    text-align: left;
    border-spacing: 0;

    thead tr th,
    tbody tr td {
      padding: 18px 24px;
      border-top: 1px solid ${({ theme }) => theme.colors.border};
    }
  }
`;

TableWrapper.Header = styled.div`
  padding: 24px;
  color: ${({ theme }) => theme.colors.tertiary};
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
`;
