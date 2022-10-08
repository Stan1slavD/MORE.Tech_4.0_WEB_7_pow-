import React from "react";
import Text from "./text";
import Cash from "../icons/монетка.svg";
function Top() {
  return (
    <ul className="top">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((element) => {
        return (
          <li>
            <img src={require("../icons/Rectangle 22.png")} />
            <Text ml={"10px"} fs="16px">
              Лернер Роман
            </Text>
            <Text ml={"10px"} mr={"10px"} fs="10px">
              170 618
            </Text>
            <img src={Cash} width="15px"></img>
          </li>
        );
      })}
    </ul>
  );
}

export default Top;
