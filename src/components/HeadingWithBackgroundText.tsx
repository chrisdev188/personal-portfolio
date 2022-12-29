import styled from "styled-components";
import Text from "./Text";

interface ContentTextProps {
  behideText: string;
}

const HeadingWithBackgroundText = styled(Text)<ContentTextProps>`
  position: relative;
  text-align: center;
  margin-bottom: 5rem;
  @media (min-width: 768px) {
    margin-bottom: 7rem;
  }
  &::before {
    content: "${(props) => props.behideText}";
    font-size: clamp(10rem, 15vw, 12.5rem);
    color: var(--element);
    position: absolute;
    bottom: -2rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
    display: none;
    @media (min-width: 768px) {
      display: block;
    }
  }
`;

export default HeadingWithBackgroundText;
