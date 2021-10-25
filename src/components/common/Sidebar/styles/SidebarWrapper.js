import styled from 'styled-components';

export const SidebarWrapper = styled.aside`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  width: 220px;
  padding-left: 12px;
  padding-right: 12px;
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  color: ${({ theme }) => theme.colors.primaryText};
  border-right: 1px solid ${({ theme }) => theme.colors.border}};
`;

SidebarWrapper.Top = styled.div`
  display: flex;
  padding: 12px 0 12px 18px;
  /* border-bottom: 1px solid ${({ theme }) => theme.colors.border}; */
`;

SidebarWrapper.Center = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 12px 0;
`;

SidebarWrapper.Bottom = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 12px 0;
`;
