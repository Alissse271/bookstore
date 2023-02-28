import styled from "styled-components";
import { Media } from "ui";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;

  ${Media.SM} {
    display: block;
    padding-top: 56px;
  }
`;

export { Container };
