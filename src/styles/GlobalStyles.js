import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  :root {
    --tiger-black: #251808;
    --tiger-brown: #fae68c;
    --tiger-orange: #f88a0b;
    --tiger-pale-yellow: #6e3808;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: ${props => props.theme.fontSize.base};
    color: ${props => props.theme.bodyTextColor};
    font-family: ${props => props.theme.sansFontFamily};
  }

  h1, h2 {
    font-family: ${({ theme }) => theme.headerFontFamily};
  }
`

export default GlobalStyles
