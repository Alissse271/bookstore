import { Button } from "components";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ROUTE } from "router";
import { useAppDispatch, useAppSelector, getUserInfo, signInUser } from "store";
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
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const {
    register,
    reset,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<IFormValues>();

  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector(getUserInfo);

  const onSubmit: SubmitHandler<IFormValues> = (userInfo) => {
    dispatch(signInUser(userInfo))
      .unwrap()
      .then(() => {
        reset();
      })
      .catch((error) => {
        setErrorMessage(error);
      });
  };

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
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          <StyledLink to={ROUTE.RESET_PASSWORD}>Forgot password?</StyledLink>
        </Container>
      </InputsContainer>
      <Button primary type="submit" label="SIGN IN" isLoader={isLoading} />
    </StyledForm>
  );
};
