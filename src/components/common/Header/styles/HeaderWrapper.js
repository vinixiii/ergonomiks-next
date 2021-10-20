import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.lightMode.colors.secondaryText};
  background-color: ${({ theme }) => theme.lightMode.colors.primaryBackground};
  border-bottom: 1px solid ${({ theme }) => theme.lightMode.colors.border};
  padding: 0 40px;
`;

HeaderWrapper.Left = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

HeaderWrapper.Right = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;

  > div {
    width: 36px;
    height: 36px;
    border: 1px solid ${({ theme }) => theme.lightMode.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius};
    cursor: pointer;
  }
`;
