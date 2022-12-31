import * as React from "react";
import styled from "styled-components";
import Container from "./Container";
import HeadingWithBackgroundText from "./HeadingWithBackgroundText";
import Section from "./Section";

const tools = [
  { id: 1, name: "HTML", url: "./html-icon.svg" },
  { id: 2, name: "CSS", url: "./css-icon.svg" },
  { id: 3, name: "Javascript", url: "./js-icon.svg" },
  { id: 10, name: "Git", url: "./git-icon.svg" },
  { id: 4, name: "React", url: "./react-icon.svg" },
  { id: 5, name: "Tailwindcss", url: "./tailwindcss-icon.svg" },
  { id: 6, name: "Styled Components", url: "./styled-components-icon.svg" },
  { id: 7, name: "Sass", url: "./sass-icon.svg" },
  { id: 8, name: "Material UI", url: "./mui-icon.svg" },
  { id: 9, name: "Bootstrap", url: "./bootstrap-icon.svg" },
  { id: 11, name: "Figma", url: "./figma-icon.svg" },
  { id: 12, name: "Illustrator", url: "./ai-icon.svg" },
];

const ToolsSection = () => {
  return (
    <Section id="tools">
      <ToolsContent>
        <HeadingWithBackgroundText variant="h2" as="h2" behideText="Tools">
          Development Tools
        </HeadingWithBackgroundText>
        <ToolList>
          {tools.map((tool) => (
            <li key={tool.id}>
              <ToolCard>
                <figcaption>{tool.name}</figcaption>
                <img src={tool.url} alt={tool.name} />
              </ToolCard>
            </li>
          ))}
        </ToolList>
      </ToolsContent>
    </Section>
  );
};

const ToolsContent = styled(Container)`
  & > * + * {
    margin-top: 5rem;
    @media (min-width: 768px) {
      margin-top: 7rem;
    }
  }
`;

const ToolList = styled.ul`
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
  justify-content: center;
`;
const ToolCard = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  img {
    height: 3rem;
    @media (min-width: 768px) {
      height: 5rem;
    }
    @media (min-width: 1200px) {
      height: 7rem;
    }
  }
  figcaption {
    color: white;
    display: none;
    @media (min-width: 768px) {
      display: block;
    }
  }
`;

export default ToolsSection;
