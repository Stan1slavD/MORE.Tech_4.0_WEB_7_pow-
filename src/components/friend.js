import React from "react";
import Text from "./text";
import Alert from "../icons/Comment.svg";
function Friend() {
  return (
    <div className="link">
      <div>
        <img src={require("../icons/Rectangle 25.png")} />
        <Text ml={"10px"}>Першин Иван</Text>
      </div>
      <img src={Alert} width="15px" style={{}}></img>
    </div>
  );
}

export default Friend;
