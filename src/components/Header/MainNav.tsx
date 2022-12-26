import { NavLink } from "react-router-dom";
import styled from "styled-components";

const navlist = [
  {
    id: 0,
    name: "home",
    path: "/",
  },
  {
    id: 1,
    name: "portfolio",
    path: "/portfolio",
  },
  {
    id: 2,
    name: "about",
    path: "/about",
  },
  {
    id: 3,
    name: "contact",
    path: "/contact",
  },
  {
    id: 4,
    name: "blog",
    path: "/blog",
  },
];

const MainNav = () => {
  return (
    <Wrapper>
      <ul>
        {navlist.map(({ id, path, name }) => (
          <li key={id}>
            <NavLink to={path}>{name}</NavLink>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }

  & > ul {
    display: flex;
    gap: 1rem;

    a {
      padding: 0.5em 1em;
      background-color: #1f1f1f;
      color: lightgray;
      border-radius: 0.5em;
      text-transform: capitalize;
      transition: all 200ms ease;

      &:hover,
      &:active {
        background-color: lightblue;
        color: black;
      }

      &.active {
        background-color: lightpink;
        color: black;
      }
    }
  }
`;

export default MainNav;
