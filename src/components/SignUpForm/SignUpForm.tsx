import { SubmitHandler, useForm } from "react-hook-form";
import { emailValidation, nameValidation, passwordValidation } from "utils";
import {
  StyledForm,
  InputsContainer,
  Container,
  StyledLabel,
  StyledInput,
  StyledButton,
  ErrorMessage,
} from "./styles";

interface IFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const SignUpForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = () => {};

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <InputsContainer>
        <Container>
          <StyledLabel>
            Name
            <StyledInput
              type="text"
              placeholder="Your name"
              {...register("name", nameValidation())}
            />
          </StyledLabel>
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </Container>
        <Container>
          <StyledLabel>
            Email
            <StyledInput
              type="email"
              placeholder="Your email"
              {...register("email", emailValidation())}
            />
          </StyledLabel>
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </Container>
        <Container>
          <StyledLabel>
            Password
            <StyledInput
              type="password"
              placeholder="Your password"
              {...register("password", passwordValidation())}
            />
          </StyledLabel>
          {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
        </Container>
        <Container>
          <StyledLabel>
            Confirm password
            <StyledInput
              type="password"
              placeholder="Confirm your password"
              {...register("confirmPassword", passwordValidation())}
            />
          </StyledLabel>
          {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>}
        </Container>
      </InputsContainer>
      <StyledButton primary type="submit" label="SIGN UP" />
    </StyledForm>
  );
};
