import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { getUserInfo, signUpUser, useAppDispatch, useAppSelector } from "store";
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
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const {
    register,
    reset,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm<IFormValues>();

  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector(getUserInfo);

  const onSubmit: SubmitHandler<IFormValues> = (userInfo) => {
    dispatch(signUpUser(userInfo))
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
              {...register("confirmPassword", { required: true })}
            />
          </StyledLabel>
          {watch("confirmPassword") !== watch("password") && getValues("confirmPassword") ? (
            <ErrorMessage>*password not match</ErrorMessage>
          ) : null}
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </Container>
      </InputsContainer>
      <StyledButton primary type="submit" label="SIGN UP" isLoader={isLoading} />
    </StyledForm>
  );
};
