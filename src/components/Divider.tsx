import styled from "styled-components";

const Divider = () => {
  return <DividerStyled as="hr" />;
};

const DividerStyled = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--primary);
  border: none;
`;

export default Divider;
