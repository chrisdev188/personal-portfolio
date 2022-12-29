import styled from "styled-components";
import { Link } from "react-scroll";

const navlist = [
  {
    id: 0,
    name: "home",
  },
  {
    id: 1,
    name: "projects",
  },
  {
    id: 2,
    name: "about",
  },
  {
    id: 3,
    name: "contact",
  },
];

const MainNav = () => {
  return (
    <StyledNav>
      <ul>
        {navlist.map(({ id, name }) => (
          <li key={id}>
            <Link to={name} spy={true} smooth={true} activeClass="active">
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }

  & > ul {
    display: flex;
    gap: 1rem;

    a {
      padding: 0.5em 1em;
      background-color: var(--element);
      color: lightgray;
      font-weight: 500;
      text-transform: capitalize;
      border-radius: 0.5em;
      transition: var(--ease-150);
      cursor: pointer;

      &:hover,
      &:active {
        background-color: var(--accent);
        color: var(--accent-contrast-text);
      }

      &.active {
        background-color: var(--primary);
        color: var(--primary-contrast-text);
      }
    }
  }
`;

export default MainNav;
