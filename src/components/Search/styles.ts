import styled from "styled-components";
import { Media, Typography } from "ui";
import { inputStyles } from "ui/inputStyles";

const SearchContainer = styled.form`
  position: relative;

  max-width: 542px;
  width: 100%;

  ${Media.XL} {
    max-width: 342px;
  }
`;
const StyledSearch = styled.input`
  width: 100%;

  padding: 16px 64px 16px 16px;

  ${Typography.B4};
  ${inputStyles};
`;
const SearchButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;

  display: flex;
  align-items: center;

  height: 32px;

  background-color: transparent;

  cursor: pointer;
`;

export { SearchContainer, StyledSearch, SearchButton };
