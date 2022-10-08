import React from "react";
import styled from "styled-components";

const StyledList = styled.div`
  background-color: #dddddd26;
  width: 100;
  height: ${(props) => props.height};
  border-radius: 20px;
  padding: 25px;
  margin-top: ${(props) => props.mt || 0};
`;

function List(props) {
  return <StyledList {...props} />;
}

export default List;
