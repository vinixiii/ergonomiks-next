import styled from 'styled-components';

export const SidebarWrapper = styled.aside`
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  color: ${({ theme }) => theme.colors.primaryText};
  border-right: 1px solid ${({ theme }) => theme.colors.border}};
`;

SidebarWrapper.Top = styled.div`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

SidebarWrapper.Center = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;

SidebarWrapper.Bottom = styled.ul`
  display: flex;
  flex-direction: column;
  padding-bottom: 12px;
  list-style: none;
`;
