import styled from "styled-components";
import Container from "./Container";

interface IFooterProps {}

const Footer: React.FC<IFooterProps> = (props) => {
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
  background-color: #202020;
  small {
    font-size: 0.875rem;
    color: #a1a1a1;
  }
`;
const FooterInner = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;
const Signature = styled.img`
  width: 7rem;
`;

export default Footer;
