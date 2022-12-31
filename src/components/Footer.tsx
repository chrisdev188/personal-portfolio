import styled from "styled-components";
import Container from "./Container";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterInner>
        <small>Designed and built with love by Chris Bui.</small>
        <Signature src="./signature.svg" alt="Chris's signature" />
      </FooterInner>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: var(--element);
  small {
    font-size: 0.875rem;
    color: #a1a1a1;
  }
`;
const FooterInner = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
  text-align: center;
  line-height: 1.65;
  @media (min-width: 768px) {
    justify-content: space-between;
    text-align: left;
  }
`;
const Signature = styled.img`
  width: 7rem;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

export default Footer;
