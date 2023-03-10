import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['dark-blue-400']};
  }

  body {
    background-color: ${(props) => props.theme['dark-blue-900']};
    color: ${(props) => props.theme['dark-blue-250']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem Nunito, sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`
