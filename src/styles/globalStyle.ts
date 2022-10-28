import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *, *::after, *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Comfortaa', cursive;
  }
`