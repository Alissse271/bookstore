import styled from "styled-components";
import { Color, Media, Typography } from "ui";

const StyledFooter = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;

  padding: 35px 0;

  border-top: 1px ${Color.GRAY} solid;

  ${Media.MD} {
    grid-template-rows: repeat(2, auto);
    grid-template-columns: auto;
    justify-content: center;
    grid-row-gap: 24px;

    padding: 40px 0;
  }
`;
const Copyright = styled.p`
  ${Typography.B3};
  color: ${Color.SECONDARY};
`;

export { StyledFooter, Copyright };
