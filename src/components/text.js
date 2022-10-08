import React from "react";
import styled from "styled-components";

const StyledText = styled.span`
  color: #ffffff;
  margin-left: ${(props) => props.marginLeft || 0};
  margin-top: ${(props) => props.marginTop || 0};
  margin-right: ${(props) => props.mr || 0};
  margin-left: ${(props) => props.ml || 0};
  font-size: ${(props) => props.fs};
  font-weight: ${(props) => props.fw};
`;
function Text(props) {
  return <StyledText {...props}></StyledText>;
}

export default Text;
