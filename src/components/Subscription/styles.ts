import { Button } from "components";
import styled from "styled-components";
import { Color, Media, Typography } from "ui";
import { inputStyles } from "ui/inputStyles";

const Container = styled.div`
  padding: 56px 64px;

  background-color: ${Color.PURPLE};

  ${Media.LG} {
    padding: 40px;
  }
  ${Media.SM} {
    padding: 24px;
  }
`;
const Title = styled.h2`
  ${Typography.H2};
  color: ${Color.PRIMARY};
`;
const SubTitle = styled.h4`
  margin-bottom: 32px;
  ${Typography.S2};
  color: ${Color.SECONDARY};

  ${Media.SM} {
    margin-bottom: 32px;
  }
`;
const StyledForm = styled.form`
  display: flex;
  width: 100%;

  ${Media.MD} {
    flex-direction: column;
  }
`;
const StyledInput = styled.input`
  width: 85%;
  padding: 16px 24px;
  ${inputStyles};

  ${Media.LG} {
    width: 73%;
  }
  ${Media.MD} {
    width: 100%;

    margin-bottom: 24px;
  }
`;
const StyledButton = styled(Button)`
  width: 15%;

  ${Media.LG} {
    width: 27%;
  }
  ${Media.MD} {
    width: 100%;
  }
`;

export { Container, Title, SubTitle, StyledForm, StyledInput, StyledButton };
