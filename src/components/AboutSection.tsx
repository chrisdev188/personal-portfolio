import * as React from "react";
import styled from "styled-components";
import Button from "./Button";
import Container from "./Container";
import Flex from "./Flex";
import Grid from "./Grid";
import HeadingWithBackgroundText from "./HeadingWithBackgroundText";
import Section from "./Section";
import Text from "./Text";

interface IAboutSectionProps {}

const AboutSection: React.FunctionComponent<IAboutSectionProps> = (props) => {
  return (
    <Section id="about">
      <Container>
        <HeadingWithBackgroundText variant="h2" as="h2" behideText="About">
          A little bit about me
        </HeadingWithBackgroundText>
        <Grid>
          <AboutText>
            <Text variant="h3" as="h3">
              Hello, My name is Chris Bui.
            </Text>
            <div>
              <Text
                variant="h4"
                as="h4"
                style={{ color: "var(--primary)", paddingBottom: "1.5rem" }}
              >
                A Frontend Web Developer with an eye for design.
              </Text>
              <div>
                <Text variant="body" as="p" style={{ marginBottom: "1rem" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi nihil corporis vero voluptatem porro suscipit,
                  commodi optio beatae a expedita!
                </Text>
              </div>
              <Text variant="body" as="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi nihil corporis vero voluptatem porro suscipit, commodi
                optio beatae a expedita!
              </Text>
            </div>
            <div>
              <Text
                variant="h4"
                as="h4"
                style={{ color: "var(--primary)", paddingBottom: "1.5rem" }}
              >
                I’m currently working on
              </Text>
              <CurrentTechs>
                <li>React</li>
                <li>Tailwindcss</li>
                <li>Typescript</li>
              </CurrentTechs>
            </div>
            <div>
              <Text
                variant="h4"
                as="h4"
                style={{ color: "var(--primary)", paddingBottom: "1.5rem" }}
              >
                What I do in my free time
              </Text>
              <Text variant="body" as="p">
                When I’m not coding, I'm probably watching movies, playing
                soccer, cycling around the city, or reading books.
              </Text>
            </div>
            <AboutActions wrap="wrap">
              <Button>View All Projects</Button>
              <Button variant="outlined">Download Resume</Button>
            </AboutActions>
          </AboutText>
          <AboutImage>
            <img src="./portrait.jpg" alt="Chris" />
          </AboutImage>
        </Grid>
      </Container>
    </Section>
  );
};

const AboutText = styled.div`
  max-width: 40rem;
  margin: auto;
  & > * + * {
    margin-top: 2.5rem;
  }
  @media (min-width: 768px) {
    grid-column: span 12;
  }
  @media (min-width: 1200px) {
    grid-column: span 6;
    max-width: unset;
    padding-right: 5rem;
  }
`;
const AboutImage = styled.div`
  order: -1;
  margin-bottom: 3rem;
  max-width: 40rem;
  margin: auto;
  margin-bottom: 3rem;
  img {
    border-radius: 8px;
  }
  @media (min-width: 768px) {
    grid-column: span 12;
    justify-self: center;
    margin-bottom: 5rem;
  }

  @media (min-width: 1200px) {
    grid-column: span 6;
    margin-bottom: 0;
    order: 1;
    height: 100%;
    display: grid;
    place-items: center;
  }
`;
const CurrentTechs = styled.ul`
  display: flex;
  flex-direction: column;
  color: #a5a5a5;
  gap: 1rem;
  list-style-type: disc;
  padding-left: 1.2rem;
`;

const AboutActions = styled(Flex)`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    justify-content: start;
  }
`;

export default AboutSection;
