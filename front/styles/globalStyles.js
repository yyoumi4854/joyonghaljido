import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset'

const GlobalStyles = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
  }
  body{
    color: #333;
    line-height: 1;
    letter-spacing: -0.0125em;
    font-family: 'Noto Sans KR', sans-serif;
  }

  span{display: inline-block}
`;

export default GlobalStyles;