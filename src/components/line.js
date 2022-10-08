import React from "react";
import styled from "styled-components";

const StiledLine = styled.hr`
  border: solid rgba(255, 237, 246, 0.14);
  margin-top: ${(props) => props.margin || 0};
  color: ${(props) => props.color};
  size: ${(props) => props.size};
`;

function Line(props) {
  return <StiledLine {...props} />;
}

export default Line;
