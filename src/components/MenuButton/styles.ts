import { burgerMenu, close } from "assets";
import styled from "styled-components";

const StyledButton = styled.button<{ open: boolean }>`
  width: 56px;
  height: 56px;

  background: ${({ open }) =>
    open ? `center no-repeat url(${close})` : `center no-repeat url(${burgerMenu})`};
  border-radius: 10px;

  cursor: pointer;
`;

export { StyledButton };
