import { createGlobalStyle } from "styled-components";
import PoppinsBold from "../Styles/fonts/poppins/PoppinsBold.otf";
import PoppinsRegular from "../Styles/fonts/poppins/PoppinsRegular.otf";

export const theme = {
  background: "#ffe4c4",
  primary: "#A52A2A",
  light: "#e2e2e2",
  text: "#0A2463",
  error: "#FB3640",
  border: "#0A2463",
  button: "#A52A2A",
  white: "#fff",
};

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
    padding: 0;
};
@font-face {
  font-family: 'Poppins Bold';
  src: url(${PoppinsBold})
}
@font-face {
  font-family: 'Poppins Regular';
  src: url(${PoppinsRegular})
}
  body {
    box-sizing: border-box;
    font-family: 'Poppins Regular';
    background-color: ${theme.background};
  }
  h1 {
    font-family: 'Poppins Bold';
  }
`;