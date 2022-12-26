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
  color: white;
  font-size: 1.5rem;
  width: 3rem;
  height: 3rem;
  display: grid;
  place-content: center;
  border-radius: 50%;
  transition: var(--ease-150);

  &:hover {
    background-color: var(--element);
  }
`;

export default ModeButton;
