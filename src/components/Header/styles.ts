import styled from "styled-components";
import { Color } from "ui";
import { Link } from "react-router-dom";

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 24px 0;

  border-bottom: 1px ${Color.GRAY} solid;
`;
const Links = styled.div`
  display: flex;
  align-items: center;
`;
const StyledLink = styled(Link)`
  height: 56px;
`;

export { StyledHeader, Links, StyledLink };
