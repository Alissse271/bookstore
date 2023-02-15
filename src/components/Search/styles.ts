import styled from "styled-components";
import { Color, Media, Typography } from "ui";

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
  color: ${Color.SECONDARY};

  border: 1px solid ${Color.GRAY};

  &::placeholder {
    ${Typography.B4};
    color: ${Color.SECONDARY};
  }
  &:focus-visible {
    outline: none;
  }
  &:disabled {
    background: ${Color.GRAY};
    border: 1px solid ${Color.SECONDARY};
  }
  &:invalid {
    border: 1px solid ${Color.RED};
  }
`;
const SearchButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;

  display: flex;
  align-items: center;

  height: 32px;

  background-color: transparent;
`;

export { SearchContainer, StyledSearch, SearchButton };
