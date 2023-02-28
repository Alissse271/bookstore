import styled from "styled-components";
import { Color, Media, Typography } from "ui";

const Container = styled.div`
  max-width: 544px;
  width: 100%;

  ${Media.XL} {
  }
`;
const StyledFormTabs = styled.div`
  display: flex;
  padding: 0 32px;
  ${Media.SM} {
    padding: 0;
  }
`;
const StyledButton = styled.button<{ isActive: boolean }>`
  width: 100%;
  padding: 26px 0;

  background-color: transparent;

  border-bottom: ${({ isActive }) =>
    isActive ? `2px solid ${Color.PRIMARY}` : "2px solid transparent"};

  cursor: pointer;

  ${Typography.H4}
  ${Media.SM} {
    padding: 18px 0;
  }
`;

export { Container, StyledFormTabs, StyledButton };
