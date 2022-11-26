import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    --background: #2F2E41;
    --white: #FFFFFF;
    --blue: #009EDD;
    --green: #039B00; 
    --grey: #999999;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
  }

  body{
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    height: 100%;
  }

  
  button{
    cursor: pointer;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.7;
			}
  }

  a{
    transition: opacity 0.2s;

   &:hover {
      opacity: 0.7;
    } 
  }
  
`;
