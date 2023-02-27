import { Button } from "components";
import { useForm } from "react-hook-form";
import { emailValidation } from "utils";
import {
  InputContainer,
  StyledForm,
  Title,
  StyledLabel,
  StyledInput,
  ErrorMessage,
} from "./styles";

interface FormValues {
  email: string;
}

export const ResetForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit = () => {};
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Title>reset password</Title>
      <InputContainer>
        <StyledLabel>
          Email
          <StyledInput
            type="text"
            placeholder="Your email"
            {...register("email", emailValidation())}
          />
        </StyledLabel>
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      </InputContainer>
      <Button type="submit" label="RESET" />
    </StyledForm>
  );
};
