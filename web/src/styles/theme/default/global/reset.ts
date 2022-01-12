import { createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body{
    padding: 0;
    margin: 0;
  }
  html{
    background-color: #0093E9;
    background-image: linear-gradient(160deg,#0093E9 0%,#80D0C7 100%);
  }
  * {
    box-sizing:border-box;
  }
`

export { GlobalStyle }
