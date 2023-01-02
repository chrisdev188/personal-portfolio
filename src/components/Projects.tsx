import styled, { css } from "styled-components";
import { TbArrowRight } from "react-icons/tb";
import Button from "./Button";
import Container from "./Container";
import Flex from "./Flex";
import Grid from "./Grid";
import HeadingWithBackgroundText from "./HeadingWithBackgroundText";
import Section from "./Section";
import Text from "./Text";

const projects = [
  {
    id: 1,
    name: "Audiophile",
    description: "lorem text description",
    category: "ecommerce",
    live: "https://audiophile-orcin.vercel.app/",
    code: "https://github.com/chrisdev188/audiophile",
    techstacks: ["HTML", "CSS", "React", "Typescript", "Styled-components"],
    img: "./Audiophile.jpg",
  },
];

interface ProjectCardProps {
  odd?: boolean;
}

const Projects = () => {
  return (
    <Section id="projects">
      <Container>
        <HeadingWithBackgroundText variant="h2" as="h2" behideText="Projects">
          Selected Projects
        </HeadingWithBackgroundText>
        <ProjectList>
          {projects.map((project, index) => {
            return (
              <li key={project.id}>
                <ProjectCard odd={index % 2 === 1}>
                  <ProjectCardImage>
                    <img src={project.img} alt={project.name} />
                  </ProjectCardImage>
                  <ProjectCardBody>
                    <Text variant="overline" as="small">
                      {project.category}
                    </Text>
                    <Text variant="h3" as="h3">
                      {project.name}
                    </Text>
                    <Text variant="body" as="p">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ut ullam animi saepe libero corrupti quaerat!
                    </Text>
                    <ProjectActions wrap="wrap">
                      <Button as="a" href={project.live} target="_blank">
                        live preview
                      </Button>
                      <Button
                        variant="text"
                        as="a"
                        href={project.code}
                        target="_blank"
                      >
                        <span>checkout code</span>
                        <TbArrowRight />
                      </Button>
                    </ProjectActions>
                  </ProjectCardBody>
                </ProjectCard>
              </li>
            );
          })}
        </ProjectList>
      </Container>
    </Section>
  );
};

const ProjectList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 7rem;
  @media (min-width: 1200px) {
    gap: 10rem;
  }
`;

export const ProjectCard = styled(Grid)<ProjectCardProps>`
  text-align: center;
  position: relative;
  gap: 0;
  @media (min-width: 768px) {
    text-align: left;
    align-items: center;
    padding-bottom: 0;
  }
  &::before {
    content: "";
    width: 0;
    height: 0;
    background-color: var(--primary);
    position: absolute;
    @media (min-width: 768px) {
      width: 5px;
      height: 100%;
      right: 0;
      left: unset;
    }
  }

  // Change layout for odd cards
  ${(props) => {
    if (props.odd === true) {
      return css`
        ${ProjectCardImage} {
          @media (min-width: 768px) {
            order: 1;
            right: unset;
          }
        }
        &:before {
          @media (min-width: 768px) {
            right: unset;
            left: 0;
          }
        }
      `;
    }
  }}
`;
const ProjectCardImage = styled.div`
  @media (min-width: 768px) {
    grid-column: span 6;
    height: 100%;
    img {
      height: 100%;
      object-fit: cover;
    }
  }
`;
const ProjectCardBody = styled.div<ProjectCardProps>`
  padding: 2rem 0rem;
  & > * + * {
    margin-top: 1.5rem;
  }
  @media (min-width: 560px) {
    grid-column: span 6;
    padding: 3rem;
  }
  @media (min-width: 768px) {
    grid-column: span 6;
    padding: 1.5rem 2rem;
  }
  @media (min-width: 1200px) {
    padding: 2rem 5rem;
  }
`;

const ProjectActions = styled(Flex)`
  padding-top: 1rem;
  @media (min-width: 768px) {
    justify-content: start;
  }
`;

export default Projects;
