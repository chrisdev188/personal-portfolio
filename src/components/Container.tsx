import styled from "styled-components";

const Container = styled.div`
  --padding-inline: 1rem;

  max-width: var(--page-width);
  margin-left: auto;
  margin-right: auto;
  padding: 0 var(--padding-inline);

  @media (min-width: 768px) {
    --padding-inline: 2rem;
  }
`;

export default Container;
