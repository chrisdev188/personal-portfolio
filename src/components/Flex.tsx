import styled from "styled-components";

interface IFlexProps {
  gap?: number;
  wrap?: "wrap" | "wrap-reverse" | "nowrap";
}

const Flex = styled.div<IFlexProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ gap }) => (gap ? `${gap}rem` : "1rem")};
  flex-wrap: ${(props) => props.wrap};
`;

export default Flex;
