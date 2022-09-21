import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize}
  * {
    box-sizing: border-box;
  }

  body {
    background-color: #FAFBFF;
    font-family: Roboto, sans-serif;
  }

  input, button {
    background-color: transparent;
    border: none;
    outline: none;
    padding: 0;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default GlobalStyles;
