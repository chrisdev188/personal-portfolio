import { TbArrowRight } from "react-icons/tb";
import { FaPaperPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Flex from "../../components/Flex";
import Grid from "../../components/Grid";
import Text from "../../components/Text";

interface IHeroSectionProps {}

const HeroSection: React.FunctionComponent<IHeroSectionProps> = (props) => {
  return (
    <Hero>
      <Inner>
        <Grid>
          <TextContent>
            <Text variant="h1" as="h2">
              stay calm & craft cool websites.
            </Text>
            <Text variant="body" as="p">
              Hello world! My name is Chris Bui, a Frontend Web Developer based
              in Toronto. I love creating simple yet beautiful things on the web
              with the power of code.
            </Text>
            <Flex style={{ paddingTop: "1rem" }} wrap="wrap">
              <Button as={Link} to="/portfolio">
                <span>view my work</span>
                <FaPaperPlane />
              </Button>
              <Button variant="text">
                <span>more about me</span>
                <TbArrowRight />
              </Button>
            </Flex>
          </TextContent>
          <Image>
            <img src="./boy-meditating.png" alt="a man meditating. 3d" />
          </Image>
        </Grid>
      </Inner>
    </Hero>
  );
};

// hero styles
const Hero = styled.section`
  padding-top: var(--header-height);
`;
const Inner = styled(Container)`
  min-height: calc(100vh - var(--header-height));
  display: grid;
  justify-content: center;
  align-items: start;
  padding-top: 5rem;
  padding-bottom: 5rem;

  @media (min-width: 768px) {
    justify-content: stretch;
  }
  @media (min-width: 1200px) {
    place-content: center;
    padding-top: 0;
  }
`;
const TextContent = styled.div`
  grid-column: 1;
  align-self: center;
  text-align: center;
  max-width: 50rem;
  margin: auto;

  & > * + * {
    margin-top: 2rem;
  }

  @media (min-width: 768px) {
    grid-column: span 12;
  }
  @media (min-width: 1200px) {
    grid-column: span 5;
    text-align: left;
  }
`;
const Image = styled.div`
  margin-top: 5rem;
  justify-self: center;
  position: relative;

  img {
    max-height: 70vmin;
  }

  @media (min-width: 768px) {
    grid-column: span 12;
  }

  @media (min-width: 1200px) {
    margin-top: 0;
    grid-column: 7 / span 6;
  }

  &::before,
  &::after {
    display: block;
    position: absolute;
    z-index: -1;
    zoom: 60%;
    @media (min-width: 768px) {
      zoom: 80%;
    }
  }
  &::before {
    content: url("./hero-bg-dark.svg");
    top: 0;
    right: 2rem;
  }
  &::after {
    content: url("./hero-bg-primary.svg");
    bottom: 0;
    left: 2rem;
  }
`;

export default HeroSection;
