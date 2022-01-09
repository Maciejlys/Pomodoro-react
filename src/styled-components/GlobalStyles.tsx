import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    background-image: url("./img/bg.jpg");
    width: 100%;
    min-height: 100vh;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;
