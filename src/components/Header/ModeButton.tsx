import { FiSun } from "react-icons/fi";
import styled from "styled-components";

const ModeButton = () => {
  return (
    <Wrapper>
      <FiSun />
    </Wrapper>
  );
};

const Wrapper = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  color: white;
  font-size: 1.5rem;
  display: none;
  border-radius: 50%;
  transition: var(--ease-150);

  @media (min-width: 768px) {
    display: grid;
    place-content: center;
  }

  &:hover {
    background-color: var(--element);
  }
`;

export default ModeButton;
