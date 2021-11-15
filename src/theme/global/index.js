import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  };
  
  ${normalize};

  html, body, h1, h2, h3, h4 {
    margin: 0;
    padding: 0;
    line-height: normal;
  };

  ul, li {
    margin: 0;
    padding: 0;
  };

  html, body {
    display: flex;
    min-height: 100vh;
    width: 100%;
  };
  
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
    font-family: ${({ theme }) => theme.fontFamily};
    background-color: ${({ theme }) => theme.colors.tertiaryBackground};
  };

  .icon {
    font-size: 32px;
    padding: 6px;
    color: ${({ theme }) => theme.colors.secondaryText};
    cursor: pointer;
    transition: all ${({ theme }) => theme.transition};
    border-radius: ${({ theme }) => theme.borderRadius};
  };

  .edit-icon {
    &:hover {
      background-color: ${({ theme }) => theme.colors.tertiaryBackground};
      color: ${({ theme }) => theme.colors.primary};
    };
  };

  .close-icon {
    &:hover {
      background-color: ${({ theme }) => theme.colors.tertiaryBackground};
      color: ${({ theme }) => theme.colors.red};
    };
  };

  &.help-icon {
    &:hover {
      background-color: ${({ theme }) => theme.colors.tertiaryBackground};
      color: ${({ theme }) => theme.colors.primary};
    };
  };
`;
