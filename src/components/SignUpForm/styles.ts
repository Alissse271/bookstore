import { Button } from "components";
import styled from "styled-components";
import { Color, Media, Typography } from "ui";
import { inputStyles } from "ui/inputStyles";

const StyledForm = styled.form`
  max-width: 544px;
  width: 100%;

  padding: 32px 32px 40px 32px;

  border: 1px solid ${Color.GRAY};

  ${Media.SM} {
    padding: 32px 0 56px 0;

    border: none;
  }
`;
const InputsContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(auto, auto);
  grid-row-gap: 16px;
`;
const Container = styled.div`
  display: grid;
  grid-row-gap: 8px;
`;
const StyledLabel = styled.label`
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-row-gap: 8px;
`;
const StyledInput = styled.input`
  width: 100%;
  padding: 14px 20px;
  ${inputStyles};
`;
const StyledButton = styled(Button)`
  margin-top: 40px;

  ${Media.SM} {
    margin-top: 32px;
  }
`;
const ErrorMessage = styled.p`
  color: ${Color.RED};
  ${Typography.B4}
`;

export {
  StyledForm,
  InputsContainer,
  Container,
  StyledLabel,
  StyledInput,
  StyledButton,
  ErrorMessage,
};
