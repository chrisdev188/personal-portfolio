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
    --primary: #8427f5;
    --primary-contrast-text: #fff;
    --accent: #eda2d6;
    --accent-contrast-text: #000;
    --element: #17181e;

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
    background-color: #000000;
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

  .sr-only {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }
`;

export default GlobalStyle;
