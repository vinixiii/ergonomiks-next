import styled, { css } from 'styled-components';
import { breakpointsMediaQuery } from '../../../../theme/utils/breakpointsMediaQuery';

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.secondaryText};
  padding: 0 16px;
  transition: all ${({ theme }) => theme.transition};

  .icon {
    padding: 6px;
    transition: all ${({ theme }) => theme.transition};
    cursor: pointer;
    border-radius: ${({ theme }) => theme.borderRadius};

    &.theme-icon {
      &:hover {
        background-color: ${({ theme }) => theme.colors.tertiaryBackground};
      }
    }

    &.help-icon {
      &:hover {
        background-color: ${({ theme }) => theme.colors.tertiaryBackground};
        color: ${({ theme }) => theme.colors.primary};
      }
    }

    &:hover {
      color: ${({ theme }) => theme.colors.primaryText};
    }
  }

  .dropdown-content {
    position: absolute;
    width: 100%;
    top: 61px;
    left: 0;
    background: ${({ theme }) => theme.colors.primaryBackground};
    box-shadow: ${({ theme }) => theme.boxShadow};
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 18px;
    opacity: 0;
    pointer-events: none;
    transform: translateY(-10px);
    transition: all ${({ theme }) => theme.transition};
    z-index: 100;

    &#language-dropdown-content {
      left: unset;
      right: 0;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 18px;
      list-style: none;

      li {
        cursor: pointer;
        padding: 0 12px;
        border-left: 3px solid ${({ theme }) => theme.colors.primaryBackground};
        white-space: nowrap;
        text-align: left;
        transition: all ${({ theme }) => theme.transition};

        &.active {
          border-left: 3px solid ${({ theme }) => theme.colors.primary};
          color: ${({ theme }) => theme.colors.primaryText};
        }

        &:hover {
          color: ${({ theme }) => theme.colors.primaryText};
        }
      }
    }

    &.dropdown-active {
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0);
    }
  }

  ${breakpointsMediaQuery({
    xs: css`
      #long-nav,
      #language {
        display: none;
      }
    `,
    sm: css`
      .dropdown {
        position: relative;

        .dropdown-content {
          width: unset;
          top: calc(100% + 8px);
        }
      }
    `,
    lg: css`
      height: 80px;

      #nav-dropdown {
        display: none;
      }

      #long-nav,
      #language {
        display: initial;
      }
    `,
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

HeaderWrapper.Nav = styled.div`
  #long-nav {
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 28px;
      list-style: none;

      li {
        height: 80px;
        display: flex;
        align-items: center;
        transition: all ${({ theme }) => theme.transition};
        border-bottom: 3px solid
          ${({ theme }) => theme.colors.primaryBackground};

        &.active {
          border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
          color: ${({ theme }) => theme.colors.primaryText};
        }

        &:hover {
          color: ${({ theme }) => theme.colors.primaryText};
        }
      }
    }
  }
`;

HeaderWrapper.Right = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  text-align: right;

  #language-option {
    border-radius: ${({ theme }) => theme.borderRadius};
    transition: all ${({ theme }) => theme.transition};

    &:hover {
      background: ${({ theme }) => theme.colors.tertiaryBackground};
      color: ${({ theme }) => theme.colors.primaryText};
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 2px solid ${({ theme }) => theme.colors.primaryText};
    border-radius: ${({ theme }) => theme.borderRadius};
  }

  /* 
  #language-dropdown-content {
    position: absolute;
    width: 100%;
    top: 61px;
    right: 0;
    background: ${({ theme }) => theme.colors.primaryBackground};
    box-shadow: ${({ theme }) => theme.boxShadow};
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 18px;
    opacity: 0;
    pointer-events: none;
    transform: translateY(-10px);
    transition: all ${({ theme }) => theme.transition};
    z-index: 9999;

    ul {
      display: flex;
      flex-direction: column;
      gap: 18px;
      list-style: none;

      li {
        cursor: pointer;
        padding: 0 12px;
        border-left: 3px solid ${({ theme }) => theme.colors.primaryBackground};
        white-space: nowrap;
        text-align: left;

        &.active {
          border-left: 3px solid ${({ theme }) => theme.colors.primary};
          color: ${({ theme }) => theme.colors.primaryText};
        }

        &:hover {
          color: ${({ theme }) => theme.colors.primaryText};
        }
      }
    }

    &.language-dropdown-active {
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0);
    }
  } */

  ${breakpointsMediaQuery({
    sm: css`
      > div {
        display: flex;
      }
    `,
  })}
`;
