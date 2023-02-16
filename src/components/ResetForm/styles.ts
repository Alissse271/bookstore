import styled from "styled-components";
import { Color, Media, Typography } from "ui";
import { inputStyles } from "ui/inputStyles";

const StyledForm = styled.form`
  display: grid;

  max-width: 544px;
  width: 100%;

  padding: 40px 32px;

  border: 1px solid ${Color.GRAY};

  ${Media.SM} {
    margin-top: 56px;
    padding: 0;

    border: none;
  }
`;
const Title = styled.h4`
  margin-bottom: 32px;
  ${Typography.H4};
`;
const InputContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(auto, auto);
  grid-row-gap: 4px;

  margin-bottom: 40px;
`;
const StyledLabel = styled.label`
  display: grid;
  grid-template-rows: repeat(auto, auto);
  grid-row-gap: 4px;
`;
const StyledInput = styled.input`
  width: 100%;
  padding: 14px 20px;
  ${inputStyles};
`;

export { StyledForm, Title, InputContainer, StyledLabel, StyledInput };
