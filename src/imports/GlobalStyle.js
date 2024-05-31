import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'CustomFont';
    src: url('./fonts/CustomFont-Regular.woff2') format('woff2'),
         url('./fonts/CustomFont-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'CustomFont';
    src: url('./fonts/CustomFont-Bold.woff2') format('woff2'),
         url('./fonts/CustomFont-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
  }

  body {
    font-family: 'Roboto', sans-serif; /* Default font */
  }
`;

export default GlobalStyle;
