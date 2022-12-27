import * as React from "react";
import HeadingWithBackgroundText from "../../components/HeadingWithBackgroundText";
import Section from "../../components/Section";

interface IToolsSectionProps {}

const ToolsSection: React.FunctionComponent<IToolsSectionProps> = (props) => {
  return (
    <Section>
      <HeadingWithBackgroundText variant="h2" as="h2" behideText="Tools">
        Tools I experienced
      </HeadingWithBackgroundText>
    </Section>
  );
};

export default ToolsSection;
