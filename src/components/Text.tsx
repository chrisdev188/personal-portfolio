import styled, { css } from "styled-components";
import { ProjectCard } from "./Projects";

interface TextProps {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "small";
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
        font-weight: 700;
        font-size: 2.369rem;
        line-height: 1.2;
        color: white;

        @media (min-width: 768px) {
          font-size: 3.157rem;
        }
        @media (min-width: 1200px) {
          font-size: 4.209rem;
        }
      `;
    }
    if (props.variant === "h2") {
      return css`
        font-weight: 600;
        font-size: 1.77rem;
        line-height: 1.3;
        color: white;
        text-transform: capitalize;

        @media (min-width: 768px) {
          font-size: 2.369rem;
        }

        @media (min-width: 1200px) {
          font-size: 3.157rem;
        }
      `;
    }
    if (props.variant === "h3") {
      return css`
        font-weight: 600;
        font-size: 1.33rem;
        line-height: 1.4;
        color: white;
        text-transform: capitalize;

        @media (min-width: 768px) {
          font-size: 1.77rem;
        }

        @media (min-width: 1200px) {
          font-size: 2.369rem;
        }
      `;
    }
    if (props.variant === "h4") {
      return css`
        font-weight: 500;
        font-size: 1rem;
        line-height: 1.5;
        color: white;
        text-transform: capitalize;

        @media (min-width: 768px) {
          font-size: 1.33rem;
        }

        @media (min-width: 1200px) {
          font-size: 1.77rem;
        }
      `;
    }
    if (props.variant === "body") {
      return css`
        font-size: 1.125rem;
        font-weight: 400;
        color: #a5a5a5;
        line-height: 1.7;
        text-transform: none;

        @media (min-width: 768px) {
          font-size: 1.25rem;
        }
      `;
    }
    if (props.variant === "overline") {
      return css`
        font-weight: 400;
        font-size: 0.8rem;
        color: var(--primary);
        text-transform: uppercase;
        letter-spacing: 4px;
      `;
    }
  }}
`;

export default Text;
