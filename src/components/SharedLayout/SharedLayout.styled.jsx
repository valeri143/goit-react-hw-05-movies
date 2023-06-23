import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
  color: black;
  font-size: x-large;
  text-decoration: none;
  margin-left: 10px;
  &.active {
    color: red;
  }
`;

export const StyledHeader = styled.header`
margin-bottom: 15px;
padding: 10px;
border-bottom: 2px  solid #7d7979;
`