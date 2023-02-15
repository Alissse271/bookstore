import styled from "styled-components";
import { Color } from "ui";

const StyledButton = styled.button<{ white?: boolean; primary?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  padding: 18px 0;

  color: ${({ white }) => (white ? `${Color.PRIMARY}` : `${Color.WHITE}`)};

  background-color: ${({ white }) => (white ? `${Color.WHITE}` : `${Color.PRIMARY}`)};

  cursor: pointer;

  &:hover,
  &:active {
    background-color: ${({ white }) => (white ? `${Color.LIGHT}` : `${Color.PRIMARY_LIGHT}`)};
  }
  &:disabled {
    background-color: ${Color.SECONDARY};
  }
`;

export { StyledButton };
