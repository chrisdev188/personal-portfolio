import styled, { css } from "styled-components";

interface TextProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "small";
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body"
    | "overline"
    | "subtitle";
}

const Text = styled.div<TextProps>`
  ${(props) => {
    if (props.variant === "h1") {
      return css`
        font-size: 2.5rem;
        font-weight: 700;
        color: white;

        @media (min-width: 768px) {
          font-size: 3rem;
        }
        @media (min-width: 1440px) {
          font-size: 4rem;
        }
      `;
    }
    if (props.variant === "body") {
      return css`
        font-size: 1rem;
        font-weight: 300;
        color: #a5a5a5;
        line-height: 1.7;
        text-transform: none;

        @media (min-width: 768px) {
          font-size: 1.125rem;
        }
      `;
    }
  }}
`;

export default Text;
