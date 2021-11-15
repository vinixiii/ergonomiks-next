import styled, { css } from 'styled-components';

import { breakpointsMediaQuery } from '../../../../theme/utils/breakpointsMediaQuery';

export const FooterWrapper = styled.footer`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.secondaryText};
  padding: 0 16px;
  transition: all ${({ theme }) => theme.transition};

  ${breakpointsMediaQuery({
    xl: css`
      max-width: 1366px;
    `,
  })}
`;
