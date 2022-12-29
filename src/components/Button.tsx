import React, { ComponentProps, ElementType } from "react";
import styled, { css } from "styled-components";
import { ProjectCard } from "../pages/Home/ProjectsSection";

type PolymorphicProps<E extends ElementType, Props> = Props &
  Omit<ComponentProps<E>, "as"> & { as?: E };

type CustomProps = {
  variant?: "outlined" | "text" | "contained";
};

const defaultElement = "button";

const Button = <Element extends React.ElementType = typeof defaultElement>(
  props: PolymorphicProps<Element, CustomProps>
) => {
  const {
    as: Component = defaultElement,
    variant = "contained",
    children,
    ...rest
  } = props;
  return (
    <ButtonStyled {...rest} as={Component} variant={variant}>
      {children}
    </ButtonStyled>
  );
};

const containedBtnStyles = css`
  background-color: var(--primary);
  color: var(--primary-contrast-text);
  border-color: var(--primary);
  &:hover {
    transform: translateY(-3px);
  }
`;
const outlinedBtnStyles = css`
  background-color: transparent;
  color: white;
  border-color: white;
  &:hover {
    background-color: #454545;
  }
`;
const textBtnStyles = css`
  background-color: transparent;
  color: white;
  border-color: transparent;
  &:hover {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`;

const ButtonStyled = styled.button<CustomProps>`
  border-radius: var(--rounded-md);
  padding: 1rem;
  text-transform: capitalize;
  font-weight: 500;
  border: 1px solid;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: var(--ease-150);

  @media (min-width: 768px) {
    padding: 1.25rem;
  }

  ${({ variant }) => {
    if (variant === "contained") {
      return containedBtnStyles;
    } else if (variant === "outlined") {
      return outlinedBtnStyles;
    } else {
      return textBtnStyles;
    }
  }}

  ${ProjectCard} & {
    padding: 0.5rem;
    font-size: 0.875rem;
    border-radius: 4px;
    @media (min-width: 1200px) {
      font-size: 1.125rem;
      padding: 1rem;
      border-radius: 8px;
    }
  }
`;

export default Button;
