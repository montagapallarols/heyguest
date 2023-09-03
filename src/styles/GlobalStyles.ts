import { createGlobalStyle } from "styled-components";
import { Color } from "./Color";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #FFFFFF;
    color: ${Color.EbonyClay};
    font-family: 'Maven Pro, sans-serif', 'Roboto', 'Arial';
    font-size: ${theme.layout.body.fontSize};
  }
  html {
  scroll-behavior: smooth;
}
`;
