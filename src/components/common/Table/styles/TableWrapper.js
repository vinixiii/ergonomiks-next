import styled from 'styled-components';

export const TableWrapper = styled.div`
  flex: 1;
  margin: 0 40px 40px;
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  border: 1px solid ${({ theme }) => theme.colors.border};
  /* box-shadow: ${({ theme }) => theme.boxShadow}; */
  border-radius: ${({ theme }) => theme.borderRadius};
`;

TableWrapper.Header = styled.div`
  padding: 24px;
  color: ${({ theme }) => theme.colors.tertiary};
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  border-radius: ${({ theme }) => theme.borderRadius};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

TableWrapper.Body = styled.div`
  position: relative;
  height: calc(100% - 73px);
  overflow-y: auto;

  table {
    width: 100%;
    text-align: left;
    border-spacing: 0;

    thead tr th,
    tbody tr td {
      padding: 18px 24px;
      border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    }
  }
`;
