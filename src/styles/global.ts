import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #E7F5F7;
    -webkit-font-smoothing: antialiased;
  }
`;

export const darkTheme = css`
  body {
    background: #1F1F1F;
  }
`;

export const lightTheme = css`
  body {
    background: #E7F5F7;
  }
`;
