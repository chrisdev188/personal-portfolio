import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }
`;

export default Grid;
