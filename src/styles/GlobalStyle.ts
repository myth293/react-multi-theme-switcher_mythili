import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    font-family: ${({ theme }) => theme.font};
    margin: 0;
    padding: 0;
    transition: all 0.3s ease;
  }

  a {
    color: ${({ theme }) => theme.color};
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;
