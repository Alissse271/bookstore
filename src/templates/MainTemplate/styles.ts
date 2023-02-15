import styled from "styled-components";
import { Media } from "ui";

const StyledMainTemplate = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 40px;

  ${Media.MD} {
    padding: 0 24px;
  }
`;

export { StyledMainTemplate };
