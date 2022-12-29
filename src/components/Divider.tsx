import * as React from "react";
import styled from "styled-components";

interface IDividerProps {}

const Divider: React.FunctionComponent<IDividerProps> = (props) => {
  return <DividerStyled as="hr" />;
};

const DividerStyled = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--primary);
  border: none;
`;

export default Divider;
