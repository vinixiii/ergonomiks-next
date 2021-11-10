import styled, { css } from 'styled-components';
import { breakpointsMediaQuery } from '../../../../theme/utils/breakpointsMediaQuery';

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.secondaryText};
  padding: 0 16px;
  transition: all ${({ theme }) => theme.transition};

  ${breakpointsMediaQuery({
    xl: css`
      max-width: 1366px;
    `,
  })}
`;

HeaderWrapper.Left = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;

  ${breakpointsMediaQuery({
    xs: css`
      #logo {
        display: none;
      }
    `,
    md: css`
      #logo {
        display: initial;
      }
      #logo-sm {
        display: none;
      }
    `,
    lg: css`
      gap: 48px;
    `,
  })}
`;

HeaderWrapper.Right = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  text-align: right;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
