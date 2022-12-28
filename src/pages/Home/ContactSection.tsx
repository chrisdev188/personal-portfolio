import styled from "styled-components";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Grid from "../../components/Grid";
import HeadingWithBackgroundText from "../../components/HeadingWithBackgroundText";
import Section from "../../components/Section";

interface IContactSectionProps {}

const ContactSection: React.FC<IContactSectionProps> = (props) => {
  return (
    <Section>
      <Container>
        <HeadingWithBackgroundText variant="h2" as="h2" behideText="Work">
          Let's work together
        </HeadingWithBackgroundText>
        <Grid>
          <Form>
            <FormInput>
              <label htmlFor="name">Your name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name..."
                required
              />
            </FormInput>
            <FormInput>
              <label htmlFor="email">Your email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email..."
                required
              />
            </FormInput>
            <FormInput>
              <label htmlFor="message">Your message</label>
              <textarea
                placeholder="Enter your message..."
                id="message"
                required
              />
            </FormInput>
            <FormButton type="submit">send message</FormButton>
          </Form>
          <FormImage>
            <img
              src="./form-image.png"
              alt="form paper with a pen. 3d illustration"
            />
          </FormImage>
        </Grid>
      </Container>
    </Section>
  );
};

const Form = styled.form`
  & > * + * {
    margin-top: 2rem;
  }
  @media (min-width: 768px) {
    grid-column: span 6;
  }
`;

const FormInput = styled.div`
  label {
    color: white;
    margin-bottom: 0.75rem;
  }
  input,
  textarea {
    padding: 1.25rem 2rem;
    background-color: var(--element);
    border: none;
    color: white;
    border-left: 2px solid var(--primary);
    &::placeholder {
      color: #717171;
    }
  }
  textarea {
    min-height: 10rem;
    width: 100%;
    resize: none;
  }
`;

const FormImage = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
    align-self: center;
    justify-self: center;
    grid-column: span 6;
    padding-left: 2rem;
    max-width: 35rem;
    img {
      width: 100%;
    }
  }
`;

const FormButton = styled(Button)`
  width: 100%;
  justify-content: center;
  margin-top: 4rem;
`;

export default ContactSection;
