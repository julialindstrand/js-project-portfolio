import { createGlobalStyle } from "styled-components"

export const basecolor = "#FD6F00"
export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  color: #202020;
  font-style: normal;
  }

body {
  display: flex;
  flex-direction: column;
  align-items: center;
}

H2 {
  text-align: center;
}`