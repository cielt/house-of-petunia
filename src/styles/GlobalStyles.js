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

  article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
menu,
nav,
section,
summary {
  display: block;
}

audio,
canvas,
progress,
video {
  display: inline-block;
}

button {
  appearance: none;
  border: none;
}

button::-moz-focus-inner {
  border: 0;
  padding: 0;
}

audio:not([controls]) {
  display: none;
  height: 0;
}

progress {
  vertical-align: baseline;
}

[hidden],
template {
  display: none;
}

a {
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}

  body {
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: ${({ theme }) => theme.fontSize.base};
    color: ${({ theme }) => theme.bodyTextColor};
    font-family: ${({ theme }) => theme.sansFontFamily};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 0.5em;
    line-height: ${({ theme }) => theme.lineHeight.header};
  }

  p, ul, ol, address {
    margin: 0 0 1em;
    padding: 0;
    line-height: ${({ theme }) => theme.lineHeight.body};
  }

  h1, h2 {
    font-family: ${({ theme }) => theme.headerFontFamily};
  }

  /* UTILITY CLASSES */

  // max-width
  .max-w {
    margin: 0 auto;
    width: 100%;

    &.max-gl {
      max-width: ${({ theme }) => theme.breakpoints.l}px;
    }

    &.max-gm {
      max-width: ${({ theme }) => theme.breakpoints.m}px;
    }

    &.max-gs {
      max-width: ${({ theme }) => theme.breakpoints.s}px;
    }
  }

  // padding
  .pa-2 {
    padding: ${({ theme }) => theme.spacing.space2}
  }

`

export default GlobalStyles
