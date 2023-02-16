import { useForm } from "react-hook-form";
import { Container, Title, SubTitle, StyledForm, StyledInput, StyledButton } from "./styles";

export const Subscription = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = () => {};
  return (
    <Container>
      <Title>Subscribe to Newsletter</Title>
      <SubTitle>
        Be the first to know about new IT books, upcoming releases, exclusive offers and more.
      </SubTitle>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledInput type="email" placeholder="Your email" />
        <StyledButton primary type="submit" label="Subscribe" />
      </StyledForm>
    </Container>
  );
};
