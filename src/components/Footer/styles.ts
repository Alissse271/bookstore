import styled from "styled-components";
import { Color, Typography } from "ui";

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 35px 0;

  border-top: 1px ${Color.GRAY} solid;
`;
const Copyright = styled.p`
  ${Typography.B3};
  color: ${Color.SECONDARY};
`;

export { StyledFooter, Copyright };
