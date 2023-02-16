import styled from "styled-components";
import { Media } from "ui";

const StyledMainTemplate = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 40px;

  ${Media.MD} {
    padding: 0 24px;
  }
`;
const Container = styled.div`
  flex: 1 0 auto;
`;

export { StyledMainTemplate, Container };
