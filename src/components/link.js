import React from "react";
import styled from "styled-components";

const StyledLink = styled.a`
  text-decoration: none;
  color: rgba(255, 255, 255, 1);
  font-size: ${(props) => props.fs};
`;

function MyLink(props) {
  return <StyledLink {...props}></StyledLink>;
}

export default MyLink;
