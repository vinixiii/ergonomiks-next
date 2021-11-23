import styled, { css } from 'styled-components';
import { breakpointsMediaQuery } from '../../../../theme/utils/breakpointsMediaQuery';

export const DropupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  position: absolute;
  bottom: calc(100% + 23px);
  width: 100%;
  background: ${({ theme }) => theme.colors.primaryBackground};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 12px;
  opacity: 0;
  pointer-events: none;
  transform: translateY(10px);
  transition: all ${({ theme }) => theme.transition};
  z-index: 100;

  ${() => DefaultListStyle}

  ${({ alignLeft }) =>
    alignLeft &&
    css`
      left: 0;
    `}

  ${({ alignRight }) =>
    alignRight &&
    css`
      right: 0;
    `}

    ${({ isActive }) =>
    isActive &&
    css`
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0);
    `}

  ${breakpointsMediaQuery({
    sm: css`
      width: unset;
    `,
  })}
`;

const DefaultListStyle = css`
  ul {
    list-style: none;

    li {
      padding: 4px 24px 4px 0;
      text-align: left;
      border-radius: ${({ theme }) => theme.borderRadius};
      transition: all ${({ theme }) => theme.transition};
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 12px;

      &.active {
        color: ${({ theme }) => theme.colors.primaryText};
      }

      &:hover {
        background: ${({ theme }) => theme.colors.tertiaryBackground};
        color: ${({ theme }) => theme.colors.primaryText};
      }

      img {
        width: 36px;
        height: 36px;
        padding: 6px;
      }
    }
  }
`;
