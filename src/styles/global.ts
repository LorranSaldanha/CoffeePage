import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5
  }

  *,*::before,*::after {
    margin: 0;
    border: none;
    padding: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
  }

  html {
    @media screen and (max-width:48rem) {
      font-size: 62.5%;
    }
    @media screen and (min-width:48.063rem) {
      font-size: 106.2%;
    }
    
  }

  body {
    min-height: 100vh;
    max-width: 100vw;
    width: 100vw;
    background: var(--background);
    --webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }
`
