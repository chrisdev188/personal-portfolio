import { createGlobalStyle } from "styled-components";

// in order for prettier working normally, this is a trick.
// https://github.com/prettier/prettier/issues/11196 🔥

const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  :root {
    --page-width: 100rem;
    --header-height: 6rem;

    /* colors */
    --primary: #c488fc;
    --primary-contrast-text: #000;
    --accent: #a8d5e4;
    --accent-contrast-text: #000;

    /* font values */
    --font-family: "Inter", sans-serif;

    /* transitions */
    --ease-150: all 150ms ease;
    --ease-300: all 300ms ease;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: var(--font-family);
  }
  ul {
    list-style-type: none;
  }
  a {
    display: inline-block;
    text-decoration: none;
    color: unset;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  button {
    background-color: transparent;
    border: none;
    font: inherit;
    cursor: pointer;
  }
`;

export default GlobalStyle;
