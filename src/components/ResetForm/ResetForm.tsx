import { Button } from "components";
import { InputContainer, StyledForm, Title, StyledLabel, StyledInput } from "./styles";

export const ResetForm = () => {
  return (
    <StyledForm>
      <Title>reset password</Title>
      <InputContainer>
        <StyledLabel>
          Email
          <StyledInput type="email" placeholder="Your email" />
        </StyledLabel>
      </InputContainer>
      <Button type="submit" label="RESET" />
    </StyledForm>
  );
};
