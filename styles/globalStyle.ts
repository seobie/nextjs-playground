import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  html,
  body {
    padding: 0;
    margin: 0;
    font-size: 11px;
    -webkit-text-size-adjust: none;
    font-display: fallback;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  button {
    background: transparent;
    cursor: pointer;
    border: none;
    outline: none;
    padding: 0;
  }
`;

export default GlobalStyle;
