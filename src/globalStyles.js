import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  html {
      scroll-behavior: smooth;
  }

  body {
      font-family: 'Nunito Sans', sans-serif;
      background: ${(props) =>
        props.theme.isLight ? 'hsl(0, 0%, 98%)' : 'hsl(207, 26%, 17%)'};
      font-size: 16px;

      @media screen and (max-width: 320px) {
        font-size: 14px;
      }

      @media screen and (min-width: 1024px){
          font-size: 18px;
      }

      @media screen and (min-width: 1800px){
          font-size: 25px;
      }
  }
`
