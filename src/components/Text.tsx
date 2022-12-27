import styled, { css } from "styled-components";
import { ProjectCard } from "../pages/Home/ProjectsSection";

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
        font-size: 2.5rem;
        color: white;

        @media (min-width: 768px) {
          font-size: 3rem;
        }
        @media (min-width: 1440px) {
          font-size: 4rem;
        }
      `;
    }
    if (props.variant === "h2") {
      return css`
        font-weight: 600;
        font-size: 2rem;
        color: white;
        text-transform: capitalize;

        @media (min-width: 768px) {
          font-size: 2.5rem;
        }

        @media (min-width: 1440px) {
          font-size: 3.33rem;
        }
      `;
    }
    if (props.variant === "h3") {
      return css`
        font-weight: 600;
        font-size: 1.8rem;
        color: white;
        text-transform: capitalize;

        @media (min-width: 768px) {
          font-size: 2.2rem;
        }

        @media (min-width: 1440px) {
          font-size: 2.8rem;
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
