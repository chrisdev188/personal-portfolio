import * as React from "react";
import styled from "styled-components";
import Container from "../../components/Container";
import Grid from "../../components/Grid";
import HeadingWithBackgroundText from "../../components/HeadingWithBackgroundText";
import Section from "../../components/Section";
import Text from "../../components/Text";

interface IAboutSectionProps {}

const AboutSection: React.FunctionComponent<IAboutSectionProps> = (props) => {
  return (
    <Section>
      <Container>
        <HeadingWithBackgroundText variant="h2" as="h2" behideText="About">
          About me
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
                When I’m not coding, I’m probably playing video games, playing
                soccer with friends, cycling around the city, reading books and
                enjoying foods.
              </Text>
            </div>
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
  text-align: center;
  & > * + * {
    margin-top: 2.5rem;
  }
  @media (min-width: 768px) {
    grid-column: span 12;
    max-width: 50rem;
    margin: auto;
  }
  @media (min-width: 1200px) {
    grid-column: span 6;
    max-width: unset;
    text-align: left;
    padding-right: 5rem;
  }
`;
const AboutImage = styled.div`
  border-radius: 8px;
  overflow: hidden;
  order: -1;
  margin-bottom: 3rem;
  max-width: 30rem;
  margin: auto;
  margin-bottom: 3rem;
  @media (min-width: 768px) {
    grid-column: span 12;
    justify-self: center;
    margin-bottom: 5rem;
  }

  @media (min-width: 1200px) {
    grid-column: span 6;
    max-width: unset;
    margin-bottom: 0;
    order: 1;
  }
`;
const CurrentTechs = styled.ul`
  display: flex;
  flex-direction: column;
  color: #a5a5a5;
  gap: 1rem;
  @media (min-width: 1200px) {
    list-style-type: disc;
    padding-left: 1.2rem;
  }
`;

export default AboutSection;
