import styled from "styled-components";
import { Media } from "ui";

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${Media.SM} {
    align-items: baseline;
  }
`;

export { Container };
