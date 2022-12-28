import { createGlobalStyle } from "styled-components";

// in order for prettier working normally, this is a trick.
// https://github.com/prettier/prettier/issues/11196 🔥

const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  :root {
    --page-width: 95rem;
    --header-height: 6rem;
    --rounded-lg: 1rem;
    --rounded-md: 0.5rem;
    --rounded-sm: 4px;

    /* colors */
    --primary: #c488fc;
    --primary-contrast-text: #000;
    --accent: #a8d5e4;
    --accent-contrast-text: #000;
    --element: #202020;

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
    background-color: #101010;
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
    display: block;
  }
  button {
    background-color: transparent;
    border: none;
    font: inherit;
    cursor: pointer;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-transform: capitalize;
    font-weight: 700;
  }
  input,
  textarea,
  label {
    display: block;
    width: 100%;
    font: inherit;
  }
`;

export default GlobalStyle;
