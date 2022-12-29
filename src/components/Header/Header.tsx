import { useState } from "react";
import styled from "styled-components";
import Container from "../Container";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import MainNav from "./MainNav";
// import ModeButton from "./ModeButton";

const Header = () => {
  const [menuShowing, setMenuShowing] = useState(false);
  const handleToggleMenu = () => {
    setMenuShowing((prevValue) => !prevValue);
  };
  return (
    <StyledHeader>
      <Inner>
        <Logo />
        <MainNav />
        <Hamburger onClick={handleToggleMenu} menuShowing={menuShowing} />
      </Inner>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  height: var(--header-height);
  color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`;

const Inner = styled(Container)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Header;
