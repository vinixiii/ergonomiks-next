import styled, { css } from 'styled-components';
import { breakpointsMediaQuery } from '../../../../theme/utils/breakpointsMediaQuery';

const ExpandedNavStyle = css`
  position: unset;
  box-shadow: unset;
  flex-direction: row;
  padding: 0;
  opacity: 1;
  pointer-events: auto;
  transform: unset;

  ul {
    display: flex;
    gap: 18px;
    padding-left: unset;

    li {
      padding: 0 6px;
      border-left: unset;
      border-radius: unset;
      height: 80px;
      display: flex;
      align-items: center;
      border-bottom: 3px solid ${({ theme }) => theme.colors.primaryBackground};

      &.active {
        border-left: unset;
        border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.primaryText};
      }

      &:hover {
        background: unset;
      }

      a {
        line-height: 80px;
      }
    }
  }
`;

const DefaultListStyle = css`
  ul {
    list-style: none;

    li {
      padding: 4px 24px 4px 0px;
      text-align: left;
      border-radius: ${({ theme }) => theme.borderRadius};

      &.active {
        color: ${({ theme }) => theme.colors.primaryText};
      }

      &:hover {
        background: ${({ theme }) => theme.colors.tertiaryBackground};
        color: ${({ theme }) => theme.colors.primaryText};
      }

      a {
        display: flex;
        align-items: center;
        gap: 12px;
      }
    }
  }
`;

const NavListStyle = css`
  ul {
    list-style: none;

    li {
      height: 44px;
      text-align: left;
      border-radius: 0 ${({ theme }) => theme.borderRadius}
        ${({ theme }) => theme.borderRadius} 0;
      padding: 4px 0;

      &.active {
        border-left: 3px solid ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.primaryText};
      }

      &:hover {
        background: ${({ theme }) => theme.colors.tertiaryBackground};
        color: ${({ theme }) => theme.colors.primaryText};
      }

      a {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 0 24px 0 18px;
      }
    }
  }
`;

export const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  position: absolute;
  top: 81px;
  width: 100%;
  background: ${({ theme }) => theme.colors.primaryBackground};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 12px;
  opacity: 0;
  pointer-events: none;
  transform: translateY(-10px);
  transition: transform ${({ theme }) => theme.transition},
    opacity ${({ theme }) => theme.transition};
  z-index: 100;

  /* &::before {
    content: '';
    position: absolute;
    top: -8px;
    right: 16px;
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 0px 8px 8px;
    border-color: transparent transparent
      ${({ theme }) => theme.colors.primaryBackground};
  } */

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

  ${({ isHeaderNav }) => (isHeaderNav ? NavListStyle : DefaultListStyle)}

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
      top: calc(100% + 12px);
      top: ${({ isHeaderNav }) =>
        isHeaderNav ? 'calc(100% + 23px)' : 'calc(100% + 17px)'};
    `,
    lg: css`
      ${({ isHeaderNav }) => isHeaderNav && ExpandedNavStyle}
    `,
  })}
`;
