import styled, { css } from "styled-components";
import { TbArrowRight } from "react-icons/tb";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Flex from "../../components/Flex";
import Grid from "../../components/Grid";
import HeadingWithBackgroundText from "../../components/HeadingWithBackgroundText";
import Section from "../../components/Section";
import Text from "../../components/Text";

const mockProjects = [
  {
    id: 1,
    name: "Audiophile",
    description: "lorem text description",
    category: "ecommerce",
    live: "live url",
    code: "code url",
    techstacks: ["HTML", "CSS", "React", "Typescript", "Styled-components"],
    img: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1562&q=80",
    featured: true,
  },
  {
    id: 2,
    name: "Movies IMDB",
    description: "lorem text description",
    category: "website",
    live: "live url",
    code: "code url",
    techstacks: ["HTML", "CSS", "React", "Typescript", "TailwindCSS"],
    img: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1562&q=80",
    featured: true,
  },
  {
    id: 3,
    name: "IShoes",
    description: "lorem text description",
    category: "ecommerce",
    live: "live url",
    code: "code url",
    techstacks: ["HTML", "CSS", "React", "Typescript"],
    img: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1562&q=80",
    featured: false,
  },
  {
    id: 4,
    name: "IMarkdown",
    description: "lorem text description",
    category: "web application",
    live: "live url",
    code: "code url",
    techstacks: ["HTML", "CSS", "React", "Typescript"],
    img: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1562&q=80",
    featured: false,
  },
];

interface ProjectCardProps {
  odd?: boolean;
}

const ProjectsSection = () => {
  const featuredProjects = mockProjects.filter(
    (project) => project.featured === true
  );

  return (
    <Section>
      <Container>
        <HeadingWithBackgroundText variant="h2" as="h2" behideText="Featured">
          Featured projects
        </HeadingWithBackgroundText>
        <ProjectList>
          {featuredProjects.map((project, index) => {
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
                      <Button>live preview</Button>
                      <Button variant="text">
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

export default ProjectsSection;
