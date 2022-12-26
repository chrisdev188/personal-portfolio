import { Link } from "react-router-dom";
import styled from "styled-components";

const Logo = () => {
  return (
    <LinkStyled to="/">
      <img src="./logo.svg" alt="Chris Bui" />
    </LinkStyled>
  );
};

const LinkStyled = styled(Link)`
  width: 7rem;
  display: grid;
  place-content: center;
  transition: all 200ms ease;

  @media (min-width: 600px) {
    width: 8rem;
  }
`;

export default Logo;
