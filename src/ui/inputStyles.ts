import { css } from "styled-components";
import { Color } from "./colors";
import { Typography } from "./typography";

export const inputStyles = css`
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
