import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset'

const GlobalStyles = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
  }
  body{
    backgound-color : F5F5F5;
    color: #333;
    line-height: 1;
    letter-spacing: -0.0125em;
    font-family: 'Noto Sans KR', sans-serif;
  }

  span{display: inline-block}
  button{
    padding: 0;
    border: 0;
    cursor: pointer;
  }
`;

export default GlobalStyles;