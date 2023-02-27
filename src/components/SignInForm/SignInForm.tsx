import { Button } from "components";
import { SubmitHandler, useForm } from "react-hook-form";
import { ROUTE } from "router";
import { emailValidation, passwordValidation } from "utils";
import {
  StyledForm,
  InputsContainer,
  Container,
  StyledLabel,
  StyledInput,
  StyledLink,
  ErrorMessage,
} from "./styles";

interface IFormValues {
  email: string;
  password: string;
}

export const SignInForm = () => {
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
          <StyledLink to={ROUTE.RESET_PASSWORD}>Forgot password?</StyledLink>
        </Container>
      </InputsContainer>
      <Button primary type="submit" label="SIGN IN" />
    </StyledForm>
  );
};
